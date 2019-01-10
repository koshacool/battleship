import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import * as fromApp from '../../../store/app.reducers';
import { Game } from '../../../shared/game';
import { GAME_STATUSES_TEXT } from '../../../constants';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  @Input() games: Game[];

  constructor(
    private store: Store<fromApp.AppState>
    ) { }

  ngOnInit() {
    this.store.select('games')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ games }) => {
        this.games = games;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getStatus(game) {
    return GAME_STATUSES_TEXT[game.status];
  }
}
