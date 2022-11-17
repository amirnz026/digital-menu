import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as FoodsActions from '../../../store/actions';

@Component({
  selector: 'app-footer-submit',
  templateUrl: './footer-submit.component.html',
  styleUrls: ['./footer-submit.component.scss'],
})
export class FooterSubmitComponent implements OnInit {
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {}
  handleClick(): void {
    this.store.dispatch(FoodsActions.submitOrder());
  }
}
