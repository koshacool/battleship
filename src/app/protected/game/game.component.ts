import { Component, ViewContainerRef } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import { BoardService } from '../board.service';
import { Board } from './board';


const NUM_PLAYERS = 2;
const BOATS_COUNT = 10;
const validateHit = validationConfig => {
  let errorMessage = '';

  validationConfig.some(({ condition, error }) => {
    if (condition) {
      errorMessage = error;
      return true;
    }

    return false;
  });

  return errorMessage;
};

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  playerId: string;
  gameId: string;
  isYourTurn = true;

  constructor(
    private store: Store<fromApp.AppState>,
    private notifierService: NotifierService,
    private boardService: BoardService,
  ) {
    this.store.select('auth')
      .subscribe(({ user, isAuthinticated }) => {
        if (isAuthinticated && !this.playerId) {
          this.playerId = user.uid;
          this.createBoards(user.uid);
        }
      });
  }

  fireTorpedo(playerId) {
    return (e) => {
      const { id } = e.target;
      const board = this.boards.find(({ player }) => player.id === playerId);
      const row = id[0];
      const col = id[1];
      const tile = board.tiles[row][col];
      const error = this.checkValidHit(playerId, tile);

      if (error) {
        this.notifierService.show({
          message: error,
          type: 'error',
        });

        return;
      }

      if (tile.value === 1) {
        this.notifierService.show({
          message: 'You got this. YOU SANK A SHIP!',
          type: 'info',
        });
        board.tiles[row][col].status = 'win';
        this.boards.find(({ player }) => player.id === this.playerId).player.score++;

      } else {
        this.notifierService.show({
          message: 'OOPS! YOU MISSED THIS TIME',
          type: 'warning',
        });
        board.tiles[row][col].status = 'fail';
      }

      board.tiles[row][col].used = true;
      board.tiles[row][col].value = 'X';

      const winner = this.winner;

      if (winner) {
        this.notifierService.show({
          message: 'You win',
          type: 'success',
        });
      } else {

      // this.isYourTurn = false;
      }
    };
  }

  createBoards(userId: string) {
    this.boardService.createBoard(userId);
    this.boardService.createBoard();
  }

  checkValidHit(boardId: string, tile: any): string {
    const validationConfig = [
      {
        condition: this.winner,
        error: 'Game is over',
      },
      {
        condition: boardId === this.playerId,
        error: 'Don\'t commit suicide. You can\'t hit your own board.',
      },
      {
        condition: !this.isYourTurn,
        error: 'It\'s not your turn to play.',
      },
      {
        condition: tile.value === 'X',
        error: 'Don\'t waste your torpedos. You already shot here.',
      },
    ];

    return validateHit(validationConfig);
  }

  get boards() {
    return this.boardService.getBoards();
  }

  get winner(): Board {
    return this.boards.find(board => board.player.score === BOATS_COUNT);
  }
}
