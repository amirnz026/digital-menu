import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as FoodsActions from '../../../store/actions';
import disableScroll from 'disable-scroll';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
})
export class FoodDetailsComponent implements OnInit {
  @Input() title: string = '';
  @Input() ingredients: string[] = [];
  @Input() foodId: string = '';
  @Input() price: string = '';
  @Input() imgSrc: string[] = [''];
  @Input() qty: number = 0;
  @Input() discountPrice: string = '';
  discountPercentage = 0;
  slideIndex = 0;

  constructor(private store: Store<AppStateInterface>) {}

  addQuantity(): void {
    this.store.dispatch(FoodsActions.incQuantity({ id: this.foodId }));
  }
  removeQuantity(): void {
    this.store.dispatch(FoodsActions.decQuantity({ id: this.foodId }));
  }

  ngOnInit(): void {
    this.discountPercentage =
      (100 * (parseInt(this.price) - parseInt(this.discountPrice))) /
      parseInt(this.price);
  }

  public handleClose(): void {
    disableScroll.off();

    this.store.dispatch(FoodsActions.hideDetails());
  }

  toPersianNumeral(en: string | number | null) {
    return ('' + en).replace(/[0-9]/g, function (t) {
      return '۰۱۲۳۴۵۶۷۸۹'.slice(+t, +t + 1);
    });
  }

  rightClick(): void {
    const isFirstSlide = this.slideIndex === 0;
    const newIndex = isFirstSlide
      ? this.imgSrc.length - 1
      : this.slideIndex - 1;
    this.slideIndex = newIndex;
  }
  leftClick(): void {
    const isLastSlide = this.slideIndex === this.imgSrc.length - 1;
    const newIndex = isLastSlide ? 0 : this.slideIndex + 1;
    this.slideIndex = newIndex;
  }
}
