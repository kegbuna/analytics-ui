import './app-header.scss';
import APP_EVENTS from '../app-events.constant';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.tpl.html',
  styleUrls: ['./app-header.scss']
})
export class AppHeaderComponent implements OnInit {
  private appTitle: string;

  @Output() openMenu: EventEmitter<any> = new EventEmitter();
  @Output() closeMenu: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  open(): void {
    this.openMenu.emit(null);
  }

  close(): void {
    this.closeMenu.emit(null);
  }
}
