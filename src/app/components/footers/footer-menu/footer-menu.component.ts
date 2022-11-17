import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as FoodsActions from '../../../store/actions';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent implements OnInit {
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {}
  handleClick(): void {
    this.store.dispatch(FoodsActions.hideCart());
  }
}
