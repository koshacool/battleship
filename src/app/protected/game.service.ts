import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import * as moment from 'moment';
import {BoardService} from './board.service';
import {Game} from '../shared/game';
import {Router} from '@angular/router';

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

  constructor(
    private boardService: BoardService,
    private db: AngularFireDatabase,
    private router: Router,
  ) { }

  createGame(userId: string) {
    const playerBoard = this.boardService.createBoard(userId);
    const computerBoard = this.boardService.createBoard('1');

    // @ts-ignore
    const newGame = new Game({
      userId,
      status: gameStatuses.notEnded,
      date: moment().format(),
      boards: {
        player: playerBoard,
        computer: computerBoard,
      }
    });

    this.db.list('games')
      .push(newGame)
      .then(res => this.router.navigate(['/games', res.key]));
  }

  getGame() {
    return this.game;
  }
}
