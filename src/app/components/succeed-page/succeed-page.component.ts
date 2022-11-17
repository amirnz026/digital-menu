import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-succeed-page',
  templateUrl: './succeed-page.component.html',
  styleUrls: ['./succeed-page.component.scss'],
})
export class SucceedPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  refresh(): void {
    window.location.reload();
  }
}
