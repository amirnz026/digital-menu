import { FoodsStateInterface } from '../types/foodsState.interface';
import { createReducer, on } from '@ngrx/store';
import * as FoodsActions from './actions';
import { immerOn } from 'ngrx-immer/store';

export const initialState: FoodsStateInterface = {
  isLoading: false,
  foods: [],
  error: null,
  isCartShown: false,
  categories: [],
  searchValue: '',
  currentShop: 'restaurant',
  footerState: '',
  orderStatus: 'notSubmitted',
};

export const reducers = createReducer(
  initialState,
  on(FoodsActions.getFoods, (state) => ({ ...state, isLoading: true })),
  on(FoodsActions.getFoodsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    foods: action.foods,
  })),
  on(FoodsActions.getFoodsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  immerOn(FoodsActions.addedToCart, (state, action) => {
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].id === action.id) {
        state.foods[i].isAddedToCart = true;
      }
    }
  }),
  immerOn(FoodsActions.removedFromCart, (state, action) => {
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].id === action.id) {
        state.foods[i].isAddedToCart = false;
      }
    }
  }),
  immerOn(FoodsActions.incQuantity, (state, action) => {
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].id === action.id) {
        state.foods[i].qty++;
      }
    }
  }),
  immerOn(FoodsActions.decQuantity, (state, action) => {
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].id === action.id) {
        state.foods[i].qty--;
      }
    }
  }),
  immerOn(FoodsActions.showDetails, (state, action) => {
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].id === action.id) {
        state.foods[i].isDetailsShown = true;
      }
    }
  }),
  immerOn(FoodsActions.hideDetails, (state) => {
    for (let i = 0; i < state.foods.length; i++) {
      state.foods[i].isDetailsShown = false;
    }
  }),
  immerOn(FoodsActions.showCart, (state) => {
    state.isCartShown = true;
  }),
  immerOn(FoodsActions.hideCart, (state) => {
    state.isCartShown = false;
  }),
  on(FoodsActions.getAllCategories, (state) => ({ ...state, isLoading: true })),
  on(FoodsActions.getAllCategoriesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    categories: action.categories,
  })),
  on(FoodsActions.getAllCategoriesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  immerOn(FoodsActions.activateCategory, (state, action) => {
    for (let i = 0; i < state.categories.length; i++) {
      if (state.categories[i].title === action.title) {
        state.categories[i].isActive = true;
      } else if (action.title === 'همه') {
        state.categories[i].isActive = false;
      } else {
        state.categories[i].isActive = false;
      }
    }
  }),

  immerOn(FoodsActions.changeSearchValue, (state, action) => {
    for (let i = 0; i < state.categories.length; i++) {
      state.categories[i].isActive = false;
    }
    state.searchValue = action.searchValue;
  }),
  immerOn(FoodsActions.deActivateAllCategories, (state) => {
    for (let i = 0; i < state.categories.length; i++) {
      state.categories[i].isActive = false;
    }
  }),
  immerOn(FoodsActions.changeShop, (state, action) => {
    state.currentShop = action.shopType;
  }),
  immerOn(FoodsActions.changeFooter, (state, action) => {
    state.footerState = action.footerText;
  }),
  immerOn(FoodsActions.emptyCart, (state) => {
    for (let i = 0; i < state.foods.length; i++) {
      state.foods[i].qty = 0;
    }
  }),
  immerOn(FoodsActions.submitOrder, (state) => {
    state.orderStatus = 'pending';
  }),
  immerOn(FoodsActions.submitOrderSuccess, (state) => {
    state.orderStatus = 'submitted';
  }),
  immerOn(FoodsActions.submitOrderFailure, (state) => {
    state.orderStatus = 'error';
  }),
  immerOn(FoodsActions.changeSubmitStatus, (state, action) => {
    state.orderStatus = action.status;
  }),
  immerOn(FoodsActions.initialStateAction, (state) => (state = initialState)),
  immerOn(FoodsActions.emptyCartItemById, (state, action) => {
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].id === action.id) {
        state.foods[i].qty = 0;
      }
    }
  })
);
