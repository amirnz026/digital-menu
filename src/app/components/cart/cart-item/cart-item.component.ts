import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getQtyById } from 'src/app/store/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as FoodsActions from '../../../store/actions';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() foodTitle: string = '';
  @Input() price: string = '';
  @Input() discountPrice: string = '';
  @Input() foodQty: string = '';
  @Input() imgSrc: string = '';
  @Input() foodId: string = '';

  discountPercentage = 0;

  itemQty$!: Observable<number>;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.itemQty$ = this.store.pipe(select(getQtyById(this.foodId)));
    this.discountPercentage =
      (100 * (parseInt(this.price) - parseInt(this.discountPrice))) /
      parseInt(this.price);
  }
  addQuantity(): void {
    this.store.dispatch(FoodsActions.incQuantity({ id: this.foodId }));
  }
  removeQuantity(): void {
    this.store.dispatch(FoodsActions.decQuantity({ id: this.foodId }));
  }
  toPersianNumeral(en: string | number | null) {
    return ('' + en).replace(/[0-9]/g, function (t) {
      return '۰۱۲۳۴۵۶۷۸۹'.slice(+t, +t + 1);
    });
  }
  numberWithCommas(x: number | string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  emptyCartItemById(): void {
    this.store.dispatch(FoodsActions.emptyCartItemById({ id: this.foodId }));
  }
}
