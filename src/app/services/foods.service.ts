import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { FoodInterface } from '../types/food.interface';
import { CategoryInterface } from '../types/category.interface';

import { HttpClient } from '@angular/common/http';
import { GET_ALL } from 'src/environments/envVariables';
import { mockApi } from './data';
@Injectable()
export class FoodsService {
  constructor(private http: HttpClient) {}
  fetchedData$!: Observable<any>;
  fetchedItems$!: Observable<any>;
  fetchedCategories$!: Observable<CategoryInterface[]>;

  getFoods(): Observable<FoodInterface[]> {
    // main backend
    this.fetchedData$ = this.http
      .get(GET_ALL)
      .pipe(map((data: any) => data.data));

    // mock backend
    // this.fetchedData$ = of(mockApi.data);

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
