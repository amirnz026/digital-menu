import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  areAllItemsShowingSelector,
  getIsActive,
  searchValueSelector,
  selectAllItems,
} from 'src/app/store/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as FoodsActions from '../../../store/actions';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input() active: string = '';
  @Input() title: string = '';
  @Input() imgSrc: string = '';
  isActive$!: Observable<boolean>;
  areAllItemsShowing$!: Observable<boolean>;
  searchValue$!: Observable<string>;
  lazyLoadImg = '../../../../assets/icons/lazyload.png';

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.isActive$ = this.store.pipe(select(getIsActive(this.title)));
    this.areAllItemsShowing$ = this.store.pipe(
      select(areAllItemsShowingSelector())
    );
    this.searchValue$ = this.store.pipe(select(searchValueSelector()));
  }

  handleClick(): void {
    if (this.title === 'همه') {
      this.store.dispatch(FoodsActions.deActivateAllCategories());
      this.store.dispatch(FoodsActions.changeSearchValue({ searchValue: '' }));
    } else {
      this.store.dispatch(FoodsActions.activateCategory({ title: this.title }));
    }
  }
}
