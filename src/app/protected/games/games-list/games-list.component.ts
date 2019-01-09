import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducers';
import { Game } from '../../../shared/game';
import { GAME_STATUSES_TEXT } from '../../../constants';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  @Input() games: Game[];

  constructor(
    private store: Store<fromApp.AppState>
    ) { }

  ngOnInit() {
    this.store.select('games')
      .subscribe(({ games }) => {
        this.games = games;
      });
  }

  getStatus(game) {
    return GAME_STATUSES_TEXT[game.status];
  }
}
