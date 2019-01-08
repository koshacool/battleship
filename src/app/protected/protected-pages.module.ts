import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MomentModule } from 'ngx-moment';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from '../auth.service';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BoardService } from './board.service';
import { ROUTES } from '../constants';

const protectedRoutes: Routes = [
  { path: ROUTES.games, component: GamesComponent, canActivate: [AuthGuard], children: [
    { path: ROUTES.root, component: GamesListComponent },
    { path: ROUTES.game, component: GameComponent },
  ] },
  { path: ROUTES.statistics, component: StatisticsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    GamesComponent,
    GameComponent,
    StatisticsComponent,
    GamesListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(protectedRoutes),
    MomentModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    BoardService,
  ]
})
export class ProtectedPagesModule {}
