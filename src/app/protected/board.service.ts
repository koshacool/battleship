import { Injectable } from '@angular/core';
import { Board } from './game/board'
import { Player } from './game/player'

@Injectable()
export class BoardService {
  playerId: string = '1';
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
    for (let i = 0; i < size * 2; i++) {
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
    len = len - 1;
    const ranRow = this.getRandomInt(0, len);
    const ranCol = this.getRandomInt(0, len);
    
    if (board[ranRow][ranCol].value == 1) {
      return this.randomShips(board, len);
    } else {
      board[ranRow][ranCol].value = 1;
      return board;
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getBoards(): Board[] {
    return this.boards;
  }
}
