import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as FoodsActions from '../../../store/actions';
import {
  footerStateSelector,
  getIsCartShown,
  qtySumSelector,
} from 'src/app/store/selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerState$!: Observable<string>;
  qtySum$!: Observable<number>;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.footerState$ = this.store.pipe(select(footerStateSelector()));
    this.qtySum$ = this.store.pipe(select(qtySumSelector()));

    this.qtySum$.subscribe((qtySum) => {
      this.store.dispatch(
        FoodsActions.changeFooter({ footerText: `تکمیل سفارش (${qtySum})` })
      );
    });
  }
  handleClick(): void {
    this.store.dispatch(FoodsActions.showCart());
  }

  toPersianNumeral(en: string | number | null) {
    return ('' + en).replace(/[0-9]/g, function (t) {
      return '۰۱۲۳۴۵۶۷۸۹'.slice(+t, +t + 1);
    });
  }
}
