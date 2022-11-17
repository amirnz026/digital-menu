import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {
  @Output() splashPersianEmit = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  handleClick(value: boolean) {
    this.splashPersianEmit.emit(value);
  }
}
