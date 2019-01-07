import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { NotifierService } from 'angular-notifier';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import * as fromApp from '../../store/app.reducers';
import * as gamesActions from '../../store/games/games.actions';

import { Game } from '../../shared/game.interface';
import { map, filter } from 'rxjs/operators';


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

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];
  gamesDbRef: any;
  playerId: string;

  constructor(
    private store: Store<fromApp.AppState>,
    private notifierService: NotifierService,
    private db: AngularFireDatabase,
    private router: Router,
  ) {
    const gamesDbRef = db.list('games');
    this.gamesDbRef = gamesDbRef;

    this.store.select('auth')
      .subscribe(({ user, isAuthinticated }) => {
        if (isAuthinticated) {
          this.playerId = user.uid;
          // this.createBoards(user.uid);

          gamesDbRef.snapshotChanges()
            .pipe(
              map(changes => changes
                .map(c => ({ key: c.payload.key, ...c.payload.val() }))
                .filter(c => c.userId === user.uid)))
            .subscribe(games => this.store.dispatch(new gamesActions.Update(games)));
        }
      });
  }

  ngOnInit() {
    this.store.select('games')
      .subscribe(({ games }) => this.games = games);
  }

  onNewGame() {
    const date = moment().format();
    
    this.gamesDbRef
      .push({
        userId: this.playerId,
        boards: [{ a: 123, b: 123 }, { a: 123, b: 123 }],
        date,
        status: gameStatuses.win
      })
      .then(res => this.router.navigate(['/games', res.key]))
  }
}
