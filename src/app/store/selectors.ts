import { AppStateInterface } from '../types/appState.interface';
import { createSelector } from '@ngrx/store';
import { FoodInterface } from '../types/food.interface';

export const selectFeature = (state: AppStateInterface) => state.foods;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const foodsSelector = (shopType: string) =>
  createSelector(selectFeature, (state) => {
    let foundFoods = [];
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].shop === shopType) {
        foundFoods.push(state.foods[i]);
      }
    }
    return foundFoods;
  });

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);

export const getQtyById = (id: string) =>
  createSelector(selectFeature, (state) => {
    let foundQty = state.foods.find((item) => item.id === id)?.qty;
    if (foundQty) {
      return foundQty;
    } else {
      return 0;
    }
  });

export const itemDetailsShown = () =>
  createSelector(selectFeature, (state) => {
    // let foundItem!: FoodInterface;
    let foundItem = state.foods.find((item) => item.isDetailsShown === true);
    if (foundItem) {
      return foundItem;
    } else {
      return foundItem;
    }
  });

export const getInCartItems = () =>
  createSelector(selectFeature, (state) => {
    let foundCartItems: FoodInterface[] | null = [];
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].qty > 0) {
        foundCartItems?.push(state.foods[i]);
      }
    }
    return foundCartItems;
  });

export const getIsCartShown = () =>
  createSelector(selectFeature, (state) => {
    return state.isCartShown;
  });

export const getAllCategories = () =>
  createSelector(selectFeature, (state) => {
    return state.categories;
  });

export const getIsActive = (title: string) =>
  createSelector(selectFeature, (state) => {
    let foundIsActive = state.categories.find(
      (item) => item.title === title
    )?.isActive;
    if (foundIsActive) {
      return foundIsActive;
    } else {
      return false;
    }
  });

export const foodsSelectorByCategory = (category: string) =>
  createSelector(selectFeature, (state) => {
    let foundFoodsByCategory: FoodInterface[] = [];
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].categories.includes(category)) {
        foundFoodsByCategory.push(state.foods[i]);
      }
    }
    if (foundFoodsByCategory) {
      return foundFoodsByCategory;
    } else {
      return [];
    }
  });

export const isAnyCategorySelected = () =>
  createSelector(selectFeature, (state) => {
    let isSelected: boolean = false;
    for (let i = 0; i < state.categories.length; i++) {
      if (state.categories[i].isActive === true) {
        isSelected = true;
      }
    }
    return isSelected;
  });

export const activeCategorySelector = () =>
  createSelector(selectFeature, (state) => {
    let foundActiveCategory = state.categories.find(
      (item) => item.isActive === true
    )?.title;
    if (foundActiveCategory) {
      return foundActiveCategory;
    } else {
      return '';
    }
  });

export const searchValueSelector = () =>
  createSelector(selectFeature, (state) => {
    let foundSearchValue = '';
    foundSearchValue = state.searchValue;
    return foundSearchValue;
  });

export const searchFoodsSelector = (searchValue: string) =>
  createSelector(selectFeature, (state) => {
    let foundFoods: FoodInterface[] = [];
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].title.includes(searchValue)) {
        foundFoods.push(state.foods[i]);
      } else if (!searchValue) {
        foundFoods = state.foods;
      }
    }
    return foundFoods;
  });

export const shopSelector = () =>
  createSelector(selectFeature, (state) => state.currentShop);

export const selectFoodsByShopType = (shopType: string) => {
  createSelector(selectFeature, (state) => {
    let foundFoods: FoodInterface[] = [];
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].shop === shopType) {
        foundFoods.push(state.foods[i]);
      }
    }
    return foundFoods;
  });
};

export const isAnyQtyNotZeroSelector = () =>
  createSelector(selectFeature, (state) => {
    let isAnyQtyNotZero: boolean = false;
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].qty > 0) {
        isAnyQtyNotZero = true;
      }
    }
    return isAnyQtyNotZero;
  });

export const footerStateSelector = () =>
  createSelector(selectFeature, (state) => {
    let footerState: string = '';
    footerState = state.footerState;
    return footerState;
  });

export const qtySumSelector = () =>
  createSelector(selectFeature, (state) => {
    let qtySum: number = 0;
    for (let i = 0; i < state.foods.length; i++) {
      qtySum += state.foods[i].qty;
    }
    return qtySum;
  });

export const totalOrderPriceSelector = () =>
  createSelector(selectFeature, (state) => {
    let totalOrderPrice: number = 0;
    for (let i = 0; i < state.foods.length; i++) {
      if (state.foods[i].qty > 0) {
        totalOrderPrice +=
          parseInt(state.foods[i].discountPrice) * state.foods[i].qty;
      }
    }
    return totalOrderPrice;
  });

export const submitStatusSelector = () =>
  createSelector(selectFeature, (state) => state.orderStatus);

export const selectAllItems = () => {
  createSelector(selectFeature, (state) => state.foods);
};

export const areAllItemsShowingSelector = () =>
  createSelector(selectFeature, (state) => {
    let areAllItemsShowing = true;
    for (let i = 0; i < state.categories.length; i++) {
      if (state.categories[i].isActive) {
        areAllItemsShowing = false;
      }
    }
    return areAllItemsShowing;
  });
