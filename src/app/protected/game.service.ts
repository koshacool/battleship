import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { BoardService } from './board.service';
import { Game } from '../shared/game';
import { GAME_STATUSES } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: Game;
  gameRef: any;

  constructor(
    private boardService: BoardService,
    private db: AngularFireDatabase,
    private router: Router,
  ) {
    this.gameRef = this.db.list('games');
  }

  restoreGame(game: Game) {
    this.game = game;
  }

  createGame(userId: string) {
    const playerBoard = this.boardService.createBoard(userId);
    const computerBoard = this.boardService.createBoard('1');
    const newGame = new Game({
      status: GAME_STATUSES.notEnded,
      date: moment().format(),
      turn: userId,
      userId,
      boards: [
        computerBoard,
        playerBoard,
      ]
    });

    this.gameRef
      .push(newGame)
      .then(res => this.router.navigate(['/games', res.key]));
  }

  updateGame() {
    const {key, ...game} = this.game;
    this.gameRef.update(key, game);
  }

  getGame() {
    return this.game;
  }
}
