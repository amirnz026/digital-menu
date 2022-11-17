import { Component, OnInit, Input } from '@angular/core';
import * as FoodsActions from '../../../store/actions';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Observable } from 'rxjs';
import { getQtyById } from 'src/app/store/selectors';
import disableScroll from 'disable-scroll';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent implements OnInit {
  @Input() price: string = '';
  @Input() discountPrice: string = '';
  @Input() title: string = '';
  @Input() imgSrc: string[] = [''];
  @Input() foodId: string = '';
  @Input() ingredients: string[] = [];
  @Input() quantity: number = 0;
  @Input() isAddedToCart: boolean = false;
  @Input() categories: string[] = [''];
  discountPercentage = 0;

  itemQty$!: Observable<number>;

  isAddRemoveQuantity: boolean = false;

  constructor(private store: Store<AppStateInterface>) {}

  addQuantity(): void {
    this.store.dispatch(FoodsActions.incQuantity({ id: this.foodId }));
  }
  removeQuantity(): void {
    this.store.dispatch(FoodsActions.decQuantity({ id: this.foodId }));
  }

  onItemClick(): void {
    disableScroll.on();

    this.store.dispatch(FoodsActions.showDetails({ id: this.foodId }));
  }

  ngOnInit(): void {
    this.itemQty$ = this.store.pipe(select(getQtyById(this.foodId)));
    this.ingredients = this.ingredients.slice(0, 3);

    this.discountPercentage =
      (100 * (parseInt(this.price) - parseInt(this.discountPrice))) /
      parseInt(this.price);
  }

  toPersianNumeral(en: string | number) {
    return ('' + en).replace(/[0-9]/g, function (t) {
      return '۰۱۲۳۴۵۶۷۸۹'.slice(+t, +t + 1);
    });
  }
}
