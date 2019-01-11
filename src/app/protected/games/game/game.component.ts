import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromApp from '../../../store/app.reducers';
import { Board } from '../../../shared/board';
import { Game } from '../../../shared/game';
import { GameService } from '../../game.service';
import { GAME_STATUSES, BOARD_SIZE } from '../../../constants';


const validateHit = validationConfig => {
  const rule = validationConfig.find(({ condition }) => condition ? true : false);

  return rule ? rule.error : '';
};

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  userId: string;

  constructor(
    private store: Store<fromApp.AppState>,
    private notifierService: NotifierService,
    private route: ActivatedRoute,
    private gameService: GameService,
  ) {
    this.store.select('auth')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ user, isAuthinticated }) => {
        if (isAuthinticated && !this.userId) {
          this.userId = user.uid;
        }
      });
  }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ id }) => {
        this.store.select('games').subscribe(({ games }) => {
          const gameFromServer = games.find(({ key }) => key === id);
          this.gameService.restoreGame(new Game(gameFromServer));
        });
      });
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  fire(e) {
    const { id } = e.target;
    const row = id[0];
    const col = id[1];
    const boardId = id.slice(2);
    const board = this.boards.find(({ playerId }) => playerId === boardId);
    const playerBoard = this.boards.find(({ playerId }) => playerId !== '1');
    const tile = board.tiles[row][col];
    const error = this.checkValidHit(board, tile);

    if (error) {
      this.notifierService.show({
        message: error,
        type: 'error',
      });
    } else {
      if (tile.value === 1) {
        this.notifierService.show({
          message: 'You got this. YOU SANK A SHIP!',
          type: 'info',
        });
        board.tiles[row][col].status = 'win';
        playerBoard.score++;
      } else {
        this.notifierService.show({
          message: 'OOPS! YOU MISSED THIS TIME',
          type: 'warning',
        });
        board.tiles[row][col].status = 'fail';
      }

      board.tiles[row][col].used = true;
      board.tiles[row][col].value = 'X';
      this.game.turn = '1';
      const winner = this.winner;

      if (winner) {
        this.game.status = winner.playerId === this.userId ? GAME_STATUSES.win : GAME_STATUSES.lost;
        this.notifierService.show({
          message: 'You win',
          type: 'success',
        });
      } else {
        setTimeout(this.enemyTurn.bind(this), 100);
      }

      this.gameService.updateGame();
    }
  }

  enemyTurn() {
    const board = this.boards.find(({ playerId }) => playerId !== '1');
    const computerBoard = this.boards.find(({ playerId }) => playerId === '1');
    const row = this.getRandomInt(BOARD_SIZE);
    const col = this.getRandomInt(BOARD_SIZE);

    if (board.tiles[row][col].status) {
      return this.enemyTurn();
    }

    if (board.tiles[row][col].value === 1) {
      board.tiles[row][col].status = 'win';
      computerBoard.score++;
    } else {
      board.tiles[row][col].status = 'fail';
    }

    board.tiles[row][col].used = true;
    board.tiles[row][col].value = 'X';
    this.game.turn = this.userId;
    const winner = this.winner;

    if (winner) {
      this.game.status = winner.playerId === this.userId ? GAME_STATUSES.win : GAME_STATUSES.lost;
      this.notifierService.show({
        message: 'Computer win',
        type: 'error',
      });
    }

    this.gameService.updateGame();
  }

  getRandomInt(len) {
    return Math.floor(Math.random() * len);
  }

  checkValidHit(board: Board, tile: any): string {
    const validationConfig = [
      {
        condition: this.game.status !== GAME_STATUSES.notEnded || this.winner,
        error: 'Game is over',
      },
      {
        condition: board.playerId !== '1',
        error: 'Don\'t commit suicide. You can\'t hit your own board.',
      },
      {
        condition: this.game.turn === '1',
        error: 'It\'s not your turn to play.',
      },
      {
        condition: tile.value === 'X',
        error: 'Don\'t waste your torpedos. You already shot here.',
      },
    ];

    return validateHit(validationConfig);
  }

  isPlayerTurn() {
    return this.game.turn === this.userId;
  }

  get winner(): Board {
    if (this.game && this.game.boards) {
      return this.game.boards.find(({ score }) => score === BOARD_SIZE);
    }

    return null;
  }

  get game() {
    return this.gameService.getGame();
  }

  get boards() {
    return this.game.boards;
  }
}
