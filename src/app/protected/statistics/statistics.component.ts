import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Store } from '@ngrx/store';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import * as fromApp from '../../store/app.reducers';
import * as gamesActions from '../../store/games/games.actions';
import { GAME_STATUSES } from '../../constants';

const getChartConfig = (data: number[]) => ({
  type: 'pie',
  data: {
    labels: ['WON', 'LOST', 'NOT FINISHED'],
    datasets: [{
      label: '% of Games',
      data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      display: true,
    },
  }
});


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  chart: [];

  constructor(
    private store: Store<fromApp.AppState>,
    private db: AngularFireDatabase,
  ) {
    const gamesDbRef = db.list('games');

    this.store.select('auth')
      .subscribe(({user, isAuthinticated}) => {
        if (isAuthinticated) {
          gamesDbRef.snapshotChanges()
            .pipe(
              map(changes => changes
                .map(c => ({key: c.payload.key, ...c.payload.val()}))
                // @ts-ignore
                .filter(c => c.userId === user.uid))
            )
            .subscribe(games => this.store.dispatch(new gamesActions.Update(games)));
        }
      });
  }

  ngOnInit() {
    this.store.select('games')
      .subscribe(({games}) => {
        const wonGames = games.filter(game => game.status === GAME_STATUSES.win).length;
        const lostGames = games.filter(game => game.status === GAME_STATUSES.lost).length;
        const notEndedGames = games.filter(game => game.status === GAME_STATUSES.notEnded).length;

        this.chart = new Chart('canvas', getChartConfig([wonGames, lostGames, notEndedGames]));
      });
  }
}
