import { Component, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import { BoardService } from '../board.service'
import { Board } from './board'


const NUM_PLAYERS = 2;
const BOARD_SIZE = 10;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  playerId: string;
  gameId: string;

  constructor(
    private store: Store<fromApp.AppState>,
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
      const board = this.boards.find(({ player }) => player.id === playerId)
      const row = id[0];
      const col = id[1];

      const tile = board.tiles[row][col];

      console.log(this.boards)
      if (!this.checkValidHit(playerId, tile)) {
        return;
      }

      if (tile.value == 1) {
        // this.toastr.success("You got this.", "HURRAAA! YOU SANK A SHIP!");
        board.tiles[row][col].status = 'win';
        this.boards.find(({ player }) => player.id === this.playerId).player.score++;
      } else {
        // this.toastr.info("Keep trying fam.", "OOPS! YOU MISSED THIS TIME");
        board.tiles[row][col].status = 'fail'
      }

      // this.canPlay = false;
      board.tiles[row][col].used = true;
      board.tiles[row][col].value = "X";
    }
  }

  createBoards(userId: string) {
    this.boardService.createBoard(userId);
    this.boardService.createBoard();
  }

  checkValidHit(boardId: string, tile: any): boolean {
    if (boardId == this.playerId) {
      // this.toastr.error("Don't commit suicide.", "You can't hit your own board.")
      return false;
    }
    if (this.winner) {
      // this.toastr.error("Game is over");
      return false;
    }
    // if (!this.canPlay) {
    //   // this.toastr.error("A bit too eager.", "It's not your turn to play.");
    //   return false;
    // }
    if (tile.value == "X") {
      // this.toastr.error("Don't waste your torpedos.", "You already shot here.");
      return false;
    }
    return true;
  }

  getQueryParam(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  getUniqueId() {
    return 'presence-' + Math.random().toString(36).substr(2, 8);
  }

  get boards() {
    return this.boardService.getBoards()
  }

  get winner(): Board {
    return this.boards.find(board => board.player.score >= BOARD_SIZE);
  }

  get validPlayer(): boolean {
    return true
    // (this.players >= NUM_PLAYERS) && (this.player < NUM_PLAYERS);
  }
}
