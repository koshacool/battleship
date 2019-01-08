import { Injectable } from '@angular/core';
import { Board } from '../shared/board';
import { BOARD_SIZE } from '../constants';


@Injectable()
export class BoardService {
  createBoard(playerId: string) {
    let tiles = [];
    // create tiles for board
    for (let i = 0; i < BOARD_SIZE; i++) {
      tiles[i] = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        tiles[i][j] = { used: false, value: 0, status: '' };
      }
    }
    // generate random ships for the board
    for (let i = 0; i < BOARD_SIZE; i++) {
      tiles = this.randomShips(tiles, BOARD_SIZE);
    }
    // create board
    const board = new Board({
      playerId,
      score: 0,
      tiles,
    });

    return board;
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
}
