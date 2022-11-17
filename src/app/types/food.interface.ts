export interface FoodInterface {
  id: string;
  title: string;
  ingredients: string[];
  imgSrc: string[];
  price: string;
  discountPrice: string;
  isAddedToCart: boolean;
  qty: number;
  categories: string[];
  isDetailsShown: boolean;
  shop: string;
}
