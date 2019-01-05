import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {NotifierService} from 'angular-notifier';
import {Store} from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import {BoardService} from '../board.service';
import {Board} from './board';
import {map} from 'rxjs/operators';


const BOATS_COUNT = 5;
const validateHit = validationConfig => {
  const rule = validationConfig.find(({condition}) => condition ? true : false);

  return rule ? rule.error : '';
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
  items: any;
  ref: any;

  constructor(
    private store: Store<fromApp.AppState>,
    private notifierService: NotifierService,
    private boardService: BoardService,
    private db: AngularFireDatabase,
  ) {

    this.store.select('auth')
      .subscribe(({user, isAuthinticated}) => {
        if (isAuthinticated && !this.playerId) {
          this.playerId = user.uid;
          this.createBoards(user.uid);

          const ref = db.list('games');
          this.ref = ref;
          this.items = ref.snapshotChanges()
            .pipe(
              map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
              ),
              map(changes => changes.filter(c => c.key === '-LVV61RP3ZEyq7zwZCb2')
              )
            ).subscribe(data => console.log('test db', data));
        }
      });
  }

  fireTorpedo(e) {
    const {id} = e.target;
    const row = id[0];
    const col = id[1];
    const boardId = id.slice(2);
    const board = this.boards.find(({player}) => player.id === boardId);
    const tile = board.tiles[row][col];
    const error = this.checkValidHit(boardId, tile);

    this.ref.push({userId: this.playerId, boards: this.boards});

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
      board.player.score++;
    } else {
      this.notifierService.show({
        message: 'OOPS! YOU MISSED THIS TIME',
        type: 'warning',
      });
      board.tiles[row][col].status = 'fail';
    }

    board.tiles[row][col].used = true;
    board.tiles[row][col].value = 'X';

    if (this.winner) {
      this.notifierService.show({
        message: 'You win',
        type: 'success',
      });
    } else {
      this.isYourTurn = false;
      this.enemyTurn();
    }
  }

  enemyTurn() {
    const board = this.boards.find(({player}) => player.id === this.playerId);
    const row = this.getRandomInt(5);
    const col = this.getRandomInt(5);

    if (board.tiles[row][col].status) {
      return this.enemyTurn();
    } else {
      if (board.tiles[row][col].value === 1) {
        board.tiles[row][col].status = 'win';
        board.player.score++;
      } else {
        board.tiles[row][col].status = 'fail';
      }

      board.tiles[row][col].used = true;
      board.tiles[row][col].value = 'X';

      if (this.winner) {
        this.notifierService.show({
          message: 'Computer win',
          type: 'error',
        });
      }

      this.isYourTurn = true;
    }
  }

  createBoards(userId: string) {
    this.boardService.createBoard();
    this.boardService.createBoard(userId);
  }

  getRandomInt(len) {
    return Math.floor(Math.random() * len);
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
    console.log(this.boards);
    return this.boards.find(board => board.player.score === BOATS_COUNT);
  }
}
