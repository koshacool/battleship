import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auth$: Observable;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.auth$ = this.store.select('auth');
  }

}
