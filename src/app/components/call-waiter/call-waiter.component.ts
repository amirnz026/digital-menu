import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-waiter',
  templateUrl: './call-waiter.component.html',
  styleUrls: ['./call-waiter.component.scss'],
})
export class CallWaiterComponent implements OnInit {
  isWaiterCalled = false;
  constructor() {}

  ngOnInit(): void {}

  callWaiter(): void {
    this.isWaiterCalled = true;
  }
}
