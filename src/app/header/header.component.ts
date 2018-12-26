import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() user: Object;
  @Input() isLoggedIn: Boolean;
  @Input() logout: Function;

  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.logout();
  }
}
