import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import * as moment from 'moment';
import {BoardService} from './board.service';
import {Game} from '../shared/game';
import {Router} from '@angular/router';
import {Board} from '../shared/board';

const gameStatuses = {
  lost: 'lost',
  win: 'win',
  notEnded: 'notEnded',
};

const textConfig = {
  [gameStatuses.win]: 'You won this game',
  [gameStatuses.lost]: 'You lost this game',
  [gameStatuses.notEnded]: 'Game not ended',
};

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

  onInit(game: Game) {
    this.game = game;
  }

  createGame(userId: string) {
    const playerBoard = this.boardService.createBoard(userId);
    const computerBoard = this.boardService.createBoard('1');
    const newGame = new Game({
      status: gameStatuses.notEnded,
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
    const { key, ...game } = this.game;
    this.gameRef.update(key, game);
  }

  getGame() {
    return this.game;
  }
}
