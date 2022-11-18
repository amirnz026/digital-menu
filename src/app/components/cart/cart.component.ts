import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getInCartItems,
  qtySumSelector,
  totalOrderPriceSelector,
} from 'src/app/store/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { FoodInterface } from 'src/app/types/food.interface';
import * as FoodsActions from '../../store/actions';
import disableScroll from 'disable-scroll';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  itemQty$!: Observable<number>;
  itemsInCart$!: Observable<FoodInterface[]>;
  qtySum$!: Observable<number>;
  totalOrderPrice$!: Observable<number>;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.qtySum$ = this.store.pipe(select(qtySumSelector()));
    this.totalOrderPrice$ = this.store.pipe(select(totalOrderPriceSelector()));
    this.itemsInCart$ = this.store.pipe(select(getInCartItems()));
    disableScroll.off();
  }
  handleClose(): void {
    this.store.dispatch(FoodsActions.hideCart());
    disableScroll.off();
  }

  handleRecycleClick(): void {
    this.store.dispatch(FoodsActions.emptyCart());
  }

  toPersianNumeral(en: string | number | null) {
    return ('' + en).replace(/[0-9]/g, function (t) {
      return '۰۱۲۳۴۵۶۷۸۹'.slice(+t, +t + 1);
    });
  }
}
