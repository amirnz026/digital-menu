import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { CategoryInterface } from 'src/app/types/category.interface';
import { Observable } from 'rxjs';
import { getAllCategories } from 'src/app/store/selectors';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.scss'],
})
export class CategoriesContainerComponent implements OnInit {
  categories$!: Observable<CategoryInterface[]>;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.categories$ = this.store.pipe(select(getAllCategories()));
  }

  goToTop(): void {
    scrollTo(0, 0);
  }
}
