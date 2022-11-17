import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as FoodsActions from '../../../store/actions';

@Component({
  selector: 'app-footer-pending',
  templateUrl: './footer-pending.component.html',
  styleUrls: ['./footer-pending.component.scss'],
})
export class FooterPendingComponent implements OnInit {
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {}
  handleClick(): void {
    this.store.dispatch(FoodsActions.submitOrder());
  }
}
