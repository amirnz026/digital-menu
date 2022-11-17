import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodInterface } from 'src/app/types/food.interface';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import {
  activeCategorySelector,
  errorSelector,
  foodsSelector,
  foodsSelectorByCategory,
  isAnyCategorySelected,
  isLoadingSelector,
  searchFoodsSelector,
  searchValueSelector,
  shopSelector,
} from 'src/app/store/selectors';
import * as FoodsActions from '../../../store/actions';

@Component({
  selector: 'app-foods-container',
  templateUrl: './foods-container.component.html',
  styleUrls: ['./foods-container.component.scss'],
})
export class FoodsContainerComponent implements OnInit {
  public trigger: number = 0;

  public rerender(): void {
    this.trigger++;
  }

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  foods$!: Observable<FoodInterface[]>;
  foodsByCategory$!: Observable<FoodInterface[]>;
  isAnyCategorySelected$: Observable<boolean>;
  activeCategory$: Observable<string>;
  searchValue$: Observable<string>;
  foundFoods$!: Observable<FoodInterface[]>;
  currentShop$!: Observable<string>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));

    this.searchValue$ = this.store.pipe(select(searchValueSelector()));

    this.activeCategory$ = this.store.pipe(select(activeCategorySelector()));

    this.activeCategory$.subscribe((activeCategory) => {
      this.foods$ = this.store.pipe(
        select(foodsSelectorByCategory(activeCategory))
      );
    });

    this.isAnyCategorySelected$ = this.store.pipe(
      select(isAnyCategorySelected())
    );
  }

  ngOnInit(): void {
    this.currentShop$ = this.store.pipe(select(shopSelector()));

    this.activeCategory$.subscribe((activeCategory) => {
      if (activeCategory) {
        this.foods$ = this.store.pipe(
          select(foodsSelectorByCategory(activeCategory))
        );
      }
    });
    this.isAnyCategorySelected$.subscribe((isActive) => {
      this.searchValue$.subscribe((searchValue) => {
        if (!isActive && !searchValue) {
          this.currentShop$.subscribe((currentShop) => {
            this.foods$ = this.store.pipe(select(foodsSelector(currentShop)));
          });
        }
      });
    });
    this.searchValue$.subscribe((searchValue) => {
      if (searchValue) {
        this.store.dispatch(FoodsActions.deActivateAllCategories());
        this.foods$ = this.store.pipe(select(searchFoodsSelector(searchValue)));
      }
    });
    this.currentShop$.subscribe((currentShop) => {
      this.foods$ = this.store.pipe(select(foodsSelector(currentShop)));
    });
  }
}
