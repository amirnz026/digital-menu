import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as FoodsActions from './store/actions';
import {
  foodsSelector,
  footerStateSelector,
  getAllCategories,
  getIsCartShown,
  itemDetailsShown,
  qtySumSelector,
  shopSelector,
  submitStatusSelector,
} from './store/selectors';
import { AppStateInterface } from './types/appState.interface';
import { CategoryInterface } from './types/category.interface';
import { FoodInterface } from './types/food.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  foods$!: Observable<FoodInterface[]>;
  isCartShown$!: Observable<boolean>;
  currentShop$!: Observable<string>;
  qtySum$!: Observable<number>;
  footerText$!: Observable<string>;
  submitStatus$!: Observable<
    'notSubmitted' | 'pending' | 'submitted' | 'error'
  >;

  // the item that its detail is showing
  itemDetailsShown$!: Observable<FoodInterface | undefined>;
  categories$!: Observable<CategoryInterface[]>;

  isSubmitFooter = false;
  isMenuFooter = false;
  isTransactionFooter = false;
  isPending = false;
  isSucceeded = false;
  isSplashShowing = true;
  isOnline = false;

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isOnline = window.navigator.onLine;

    this.store.dispatch(FoodsActions.getFoods());
    this.currentShop$ = this.store.pipe(select(shopSelector()));

    this.itemDetailsShown$ = this.store.pipe(select(itemDetailsShown()));

    this.currentShop$.subscribe((currentShop) => {
      this.foods$ = this.store.pipe(select(foodsSelector(currentShop)));
      this.store.dispatch(
        FoodsActions.getAllCategories({ shopType: currentShop })
      );
    });
    this.isCartShown$ = this.store.pipe(select(getIsCartShown()));
    this.footerText$ = this.store.pipe(select(footerStateSelector()));
    this.qtySum$ = this.store.pipe(select(qtySumSelector()));

    // footer complete transaction
    this.qtySum$.subscribe((qtySum) => {
      if (qtySum) {
        this.store.dispatch(
          FoodsActions.changeFooter({ footerText: `تکمیل سفارش (${qtySum})` })
        );
      }
    });

    // footer submit order
    this.isCartShown$.subscribe((isCartShown) => {
      if (isCartShown) {
        this.store.dispatch(
          FoodsActions.changeFooter({ footerText: `ثبت سفارش` })
        );
      }
    });

    // footer menu
    this.isCartShown$.subscribe((isCartShown) => {
      this.qtySum$.subscribe((qtySum) => {
        if (isCartShown && !qtySum) {
          this.store.dispatch(FoodsActions.changeFooter({ footerText: `منو` }));
        }
      });
    });

    this.submitStatus$ = this.store.pipe(select(submitStatusSelector()));

    this.submitStatus$.subscribe((submitStatus) => {
      this.isCartShown$.subscribe((isCartShown) => {
        this.qtySum$.subscribe((qtySum) => {
          if (submitStatus === 'pending') {
            this.isTransactionFooter = false;
            this.isMenuFooter = false;
            this.isSubmitFooter = false;
            this.isPending = true;
          } else if (submitStatus === 'submitted') {
            this.isTransactionFooter = false;
            this.isMenuFooter = false;
            this.isSubmitFooter = false;
            this.isPending = false;
            this.isSucceeded = true;
          } else if (isCartShown && qtySum) {
            this.isTransactionFooter = false;
            this.isMenuFooter = false;
            this.isSubmitFooter = true;
            this.isPending = false;
          } else if (!isCartShown && qtySum) {
            this.isTransactionFooter = true;
            this.isMenuFooter = false;
            this.isSubmitFooter = false;
            this.isPending = false;
          } else if (submitStatus === 'notSubmitted' && !isCartShown) {
            this.isTransactionFooter = false;
            this.isMenuFooter = false;
            this.isSubmitFooter = false;
            this.isPending = false;
            this.isSucceeded = false;
          } else if (!qtySum && isCartShown) {
            this.isTransactionFooter = false;
            this.isMenuFooter = true;
            this.isSubmitFooter = false;
            this.isPending = false;
          } else {
            this.isTransactionFooter = false;
            this.isMenuFooter = false;
            this.isSubmitFooter = false;
            this.isPending = false;
          }
        });
      });
    });
    this.categories$ = this.store.pipe(select(getAllCategories()));
  }

  handleClick(): void {}
  changeSplashScreenStatus(): void {
    this.isSplashShowing = false;
  }

  toPersianNumeral(en: string | number) {
    return ('' + en).replace(/[0-9]/g, function (t) {
      return '۰۱۲۳۴۵۶۷۸۹'.slice(+t, +t + 1);
    });
  }

  getItemOnInit(): void {}
}
