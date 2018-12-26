import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() user: Object;
  @Input() isLoggedIn: Boolean;
  @Output() logout: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit(true);
  }
}
