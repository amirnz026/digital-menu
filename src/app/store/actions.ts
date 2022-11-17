import { createAction, props } from '@ngrx/store';
import { CategoryInterface } from '../types/category.interface';
import { FoodInterface } from '../types/food.interface';

export const getFoods = createAction(
  '[Foods] Get Foods'
  // props<{ shopType: string }>()
);
export const getFoodsSuccess = createAction(
  '[Foods] Get Foods Success',
  props<{ foods: FoodInterface[] }>()
);
export const getFoodsFailure = createAction(
  '[Foods] Get Foods Failure',
  props<{ error: string }>()
);

export const newTodo = createAction(
  '[New To Do] New To Do',
  props<{ todo: string }>()
);

export const addedToCart = createAction(
  '[Food Item] Added to Cart',
  props<{ id: string }>()
);

export const incQuantity = createAction(
  '[Food Item] Incremented Quantity',
  props<{ id: string }>()
);

export const decQuantity = createAction(
  '[Food Item] Decremented Quantity',
  props<{ id: string }>()
);

export const removedFromCart = createAction(
  '[Food Item] Removed From Cart',
  props<{ id: string }>()
);

export const showDetails = createAction(
  '[Food Item] Show Details',
  props<{ id: string }>()
);

export const hideDetails = createAction(
  '[Food Item] Hide Details'
  // props<{ id: string }>()
);

export const showCart = createAction('[Food Item] Show Cart');
export const hideCart = createAction('[Food Item] Hide Cart');
export const getAllCategories = createAction(
  '[Categories] Get All Categories',

  props<{ shopType: string }>()
);
export const getAllCategoriesSuccess = createAction(
  '[Categories] Get All Success',
  props<{ categories: CategoryInterface[] }>()
);
export const getAllCategoriesFailure = createAction(
  '[Categories] Get All Failure',
  props<{ error: string }>()
);

export const activateCategory = createAction(
  '[Category Item] Activate Category',
  props<{ title: string }>()
);

export const deActivateAllCategories = createAction(
  '[Category Item] Deactivate All Categories'
);

export const changeSearchValue = createAction(
  '[SearchBar] Search Value Updated',
  props<{ searchValue: string }>()
);

export const changeShop = createAction(
  '[Shop] Shop Change',
  props<{ shopType: string }>()
);

export const changeFooter = createAction(
  '[Footer] Change Footer',
  props<{ footerText: string }>()
);

export const emptyCart = createAction('[Cart] Empty Cart');

export const submitOrder = createAction('[Order] Submit Order');
export const submitOrderSuccess = createAction('[Order] Submit Order Success');
export const submitOrderFailure = createAction(
  '[Order] Submit Order Failure',
  props<{ error: string }>()
);

export const changeSubmitStatus = createAction(
  '[Order] Status Change',
  props<{ status: 'notSubmitted' | 'pending' | 'submitted' | 'error' }>()
);

export const initialStateAction = createAction('[Initial State]');

export const emptyCartItemById = createAction(
  '[Cart] Cart Item Emptied',
  props<{ id: string }>()
);
