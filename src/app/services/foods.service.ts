import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { FoodInterface } from '../types/food.interface';
import { CategoryInterface } from '../types/category.interface';

import { HttpClient } from '@angular/common/http';
import { GET_ALL } from 'src/environments/envVariables';
@Injectable()
export class FoodsService {
  constructor(private http: HttpClient) {}
  fetchedData$!: Observable<any>;
  fetchedItems$!: Observable<any>;
  fetchedCategories$!: Observable<CategoryInterface[]>;

  getFoods(): Observable<FoodInterface[]> {
    // const foods = foodItems;

    this.fetchedData$ = this.http
      .get(GET_ALL)
      .pipe(map((data: any) => data.data));

    this.fetchedItems$ = this.fetchedData$.pipe(
      map((item: any) =>
        item.products.map((item: any) => {
          return {
            id: String(item.id),
            title: item.topic,
            ingredients: item.description.split('-'),
            price: parseInt(item.price) / 10,
            discountPrice: item.discountPrice / 10,
            imgSrc: [item.smallImageUrl],
            isAddedToCart: false,
            qty: 0,
            categories: [item.category.topic],
            isDetailsShown: false,
            shop: 'restaurant',
          };
        })
      )
    );

    // return of(foods).pipe(delay(2000));
    return this.fetchedItems$;
  }

  getAllCategories(shopType: string): Observable<CategoryInterface[]> {
    // let fetchedCategories = categories;
    // fetchedCategories = fetchedCategories.filter(
    //   (category) => category.shopType === shopType
    // );

    this.fetchedCategories$ = this.fetchedData$.pipe(
      map((data: any) =>
        data.categories.map((category: any) => {
          return {
            title: category.topic,
            imgSrc: category.imageUrl,
            isActive: false,
            shopType: category.store.name,
          };
        })
      )
    );

    return this.fetchedCategories$;
  }

  submitOrder(): Observable<boolean> {
    return of(true).pipe(delay(1500));
  }
}

// setCookie(name: string, value: string, expireDays: number, path: string = '') {
//   const d: Date = new Date();
//   d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
//   const expires = `expires=${d.toUTCString()}`;
//   const cpath = path ? `; path=${path}` : '';
//   document.cookie = `${name}=${value}; ${expires}${cpath};SameSite=Strict;secure`;
// }
// }
