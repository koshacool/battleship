import { Injectable } from '@angular/core';
import { Board } from './game/board';
import { Player } from './game/player';

@Injectable()
export class BoardService {
  playerId = '1';
  boards: Board[] = [];

  constructor() {}

  createBoard(playerId: string = '1', size: number = 5) {
    let tiles = [];
    // create tiles for board
    for (let i = 0; i < size; i++) {
      tiles[i] = [];
      for (let j = 0; j < size; j++) {
        tiles[i][j] = { used: false, value: 0, status: '' };
      }
    }
    // generate random ships for the board
    for (let i = 0; i < 5; i++) {
      tiles = this.randomShips(tiles, size);
    }
    // create board
    const board = new Board({
      player: new Player({ id: playerId }),
      tiles,
    });
    this.boards.push(board);
  }

  randomShips(board: Object[], len: number): Object[] {
    const ranRow = this.getRandomInt(len);
    const ranCol = this.getRandomInt(len);

    if (board[ranRow][ranCol].value === 1) {
      return this.randomShips(board, len);
    } else {
      board[ranRow][ranCol].value = 1;
      return board;
    }
  }

  getRandomInt(len) {
    return Math.floor(Math.random() * len);
  }

  getBoards(): Board[] {
    return this.boards;
  }
}
