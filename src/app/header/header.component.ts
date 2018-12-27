import {Component, Output, OnInit, EventEmitter, NgZone} from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() logout: any = new EventEmitter();
  user: Object;
  isAuthinticated: Boolean;

  constructor(
    private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.spinnerService.show();

    this.authService.user.subscribe(
      user => {
        this.spinnerService.hide();
        if (user) {
          this.user = user;
          this.isAuthinticated = true;
        } else {
          this.user = {};
          this.isAuthinticated = false;
        }

        this.zone.run(() => {});
      }
    );
  }

  onLogout() {
    this.logout.emit(true);
  }
}
