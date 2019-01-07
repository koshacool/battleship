import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { NotifierService } from 'angular-notifier';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import * as fromApp from '../../store/app.reducers';
import * as gamesActions from '../../store/games/games.actions';

import { Game } from '../../shared/game';
import { map } from 'rxjs/operators';
import {GameService} from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GameService]
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
    private gameService: GameService,
  ) {
    const gamesDbRef = db.list('games');
    this.gamesDbRef = gamesDbRef;

    this.store.select('auth')
      .subscribe(({ user, isAuthinticated }) => {
        if (isAuthinticated) {
          this.playerId = user.uid;

          gamesDbRef.snapshotChanges()
            .pipe(
              map(changes => changes
                .map(c => ({ key: c.payload.key, ...c.payload.val() }))
                // @ts-ignore
                .filter(c => c.userId === user.uid))
            )
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
    const newGame = this.gameService.createGame(this.playerId);
  }
}
