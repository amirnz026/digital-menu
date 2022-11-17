import { CategoryInterface } from './category.interface';
import { FoodInterface } from './food.interface';

export interface FoodsStateInterface {
  isLoading: boolean;
  foods: FoodInterface[];
  error: string | null;
  isCartShown: boolean;
  categories: CategoryInterface[];
  searchValue: string;
  currentShop: string;
  footerState: string;
  orderStatus: 'notSubmitted' | 'pending' | 'submitted' | 'error';
}
