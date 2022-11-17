import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { shopSelector } from 'src/app/store/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Observable } from 'rxjs';
import * as FoodsActions from '../../../store/actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentShop$!: Observable<string>;
  coffeeShopOrder: number = 1;
  restaurantOrder: number = 2;
  fastFoodOrder: number = 2;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.currentShop$ = this.store.pipe(select(shopSelector()));
    this.currentShop$.subscribe((currentShop) => {
      this.store.dispatch(FoodsActions.changeShop({ shopType: currentShop }));
    });
  }
  handleClick(userShop: string): void {
    this.store.dispatch(FoodsActions.changeShop({ shopType: userShop }));
    this.currentShop$.subscribe((currentShop) => {
      switch (currentShop) {
        case 'restaurant':
          this.coffeeShopOrder = 1;
          this.restaurantOrder = 2;
          this.fastFoodOrder = 3;
          break;
        case 'fastFood':
          this.coffeeShopOrder = 1;
          this.restaurantOrder = 3;
          this.fastFoodOrder = 2;
          break;
        case 'coffeeShop':
          this.coffeeShopOrder = 2;
          this.restaurantOrder = 1;
          this.fastFoodOrder = 3;
          break;
        default:
          this.coffeeShopOrder = 1;
          this.restaurantOrder = 2;
          this.fastFoodOrder = 3;
      }
    });
  }
}
