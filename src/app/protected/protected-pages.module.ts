import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game/game.component';
import { AuthGuard } from './auth-guard.service';
import { StatisticsComponent } from './statistics/statistics.component';
import routes from '../constants/routes';

const protectedRoutes: Routes = [
  { path: routes.game, component: GameComponent, canActivate: [AuthGuard] },
  { path: routes.statistics, component: StatisticsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    GameComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(protectedRoutes),
  ],
})
export class ProtectedPagesModule {
}
