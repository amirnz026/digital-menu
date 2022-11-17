import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import * as FoodsActions from './actions';
import { map, catchError, mergeMap, of } from 'rxjs';
import { FoodsService } from '../services/foods.service';

@Injectable()
export class FoodsEffects {
  getFoods$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FoodsActions.getFoods),
      mergeMap(() => {
        return this.foodsService.getFoods().pipe(
          map((foods) => FoodsActions.getFoodsSuccess({ foods })),
          catchError((error) =>
            of(FoodsActions.getFoodsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  submitOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FoodsActions.submitOrder),
      mergeMap(() => {
        return this.foodsService.submitOrder().pipe(
          map(() => FoodsActions.submitOrderSuccess()),
          catchError((error) =>
            of(FoodsActions.submitOrderFailure({ error: error.message }))
          )
        );
      })
    )
  );

  getAllCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FoodsActions.getAllCategories),
      mergeMap((action) => {
        return this.foodsService.getAllCategories(action.shopType).pipe(
          map((categories) =>
            FoodsActions.getAllCategoriesSuccess({ categories })
          ),
          catchError((error) =>
            of(FoodsActions.getAllCategoriesFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private foodsService: FoodsService) {}
}
