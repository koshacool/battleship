import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {NotifierService} from 'angular-notifier';
import {Store} from '@ngrx/store';

import * as fromApp from '../../../store/app.reducers';
import {BoardService} from '../../board.service';
import {Board} from '../../../shared/board';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Game} from '../../../shared/game';
import {GameService} from '../../game.service';


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
export class GameComponent implements OnInit {
  userId: string;

  constructor(
    private store: Store<fromApp.AppState>,
    private notifierService: NotifierService,
    private route: ActivatedRoute,
    private gameService: GameService,
  ) {
    this.store.select('auth')
      .subscribe(({user, isAuthinticated}) => {
        if (isAuthinticated && !this.userId) {
          this.userId = user.uid;
        }
      });
    // this.store.select('auth')
    //   .subscribe(({user, isAuthinticated}) => {
    //     if (isAuthinticated && !this.playerId) {
    //       this.playerId = user.uid;
    //       this.createBoards(user.uid);
    //
    //       const ref = db.list('games');
    //       this.ref = ref;
    //       this.items = ref.snapshotChanges()
    //         .pipe(
    //           map(changes =>
    //             changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
    //           ),
    //           map(changes => changes.filter(c => c.key === '-LVV61RP3ZEyq7zwZCb2')
    //           )
    //         ).subscribe(data => console.log('test db', data));
    //     }
    //   });
  }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      this.store.select('games').subscribe(({games}) => {
        const gameFromServer = games.find(({key}) => key === id);
        this.gameService.onInit(new Game(gameFromServer));
      });
    });
  }

  fire(e) {
    const {id} = e.target;
    const row = id[0];
    const col = id[1];
    const boardId = id.slice(2);
    const board = this.boards.find(({playerId}) => playerId === boardId);
    const playerBoard = this.boards.find(({playerId}) => playerId !== '1');
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

      this.gameService.updateGame();

      if (this.winner) {
        this.notifierService.show({
          message: 'You win',
          type: 'success',
        });
      } else {
        this.enemyTurn();
      }
    }
  }

  onFire(board1, board2, boardRow, boardCol) {
    const row =  boardRow || this.getRandomInt(BOATS_COUNT);
    const col =  boardCol || this.getRandomInt(BOATS_COUNT);


  }

  enemyTurn() {
    const board = this.boards.find(({playerId}) => playerId !== '1');
    const computerBoard = this.boards.find(({playerId}) => playerId === '1');
    const row = this.getRandomInt(BOATS_COUNT);
    const col = this.getRandomInt(BOATS_COUNT);

    if (board.tiles[row][col].status) {
      return this.enemyTurn();
    } else {
      if (board.tiles[row][col].value === 1) {
        board.tiles[row][col].status = 'win';
        computerBoard.score++;
      } else {
        board.tiles[row][col].status = 'fail';
      }

      board.tiles[row][col].used = true;
      board.tiles[row][col].value = 'X';
      this.game.turn = this.userId;

      this.gameService.updateGame();

      if (this.winner) {
        this.notifierService.show({
          message: 'Computer win',
          type: 'error',
        });
      }
    }
  }

  getRandomInt(len) {
    return Math.floor(Math.random() * len);
  }

  checkValidHit(board: Board, tile: any): string {
    const validationConfig = [
      {
        condition: this.winner,
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

  get winner(): Board {
    if (this.game && this.game.boards) {
      return this.game.boards.find(({score}) => score === BOATS_COUNT);
    }

    return null;
  }

  get game() {
    return this.gameService.getGame();
  }

  get boards() {
    return this.game.boards;
  }

  isPlayerTurn() {
    return this.game.turn === this.userId;
  }
}
