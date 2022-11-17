import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  searchFoodsSelector,
  searchValueSelector,
} from 'src/app/store/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { FoodInterface } from 'src/app/types/food.interface';
import * as FoodsActions from '../../../store/actions';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searchValue: string = '';
  searchValue$!: Observable<string>;
  foundFoods$!: Observable<FoodInterface[]>;
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {}
  handleClick(userInput: string): void {
    this.store.dispatch(
      FoodsActions.changeSearchValue({ searchValue: userInput })
    );
  }
  handleChange(searchInput: any): void {
    this.searchValue = searchInput;
    this.store.dispatch(
      FoodsActions.changeSearchValue({ searchValue: this.searchValue })
    );
    if (!this.searchValue) {
      this.store.dispatch(
        FoodsActions.changeSearchValue({ searchValue: this.searchValue })
      );
      this.store.dispatch(FoodsActions.deActivateAllCategories());
    }
  }
}
