// import { CategoryInterface } from '../types/category.interface';
// import { FoodInterface } from '../types/food.interface';

// let tempImage = ['../../../../assets/images/2.jpg'];

// const foodItems: FoodInterface[] = [
//   {
//     id: '1',
//     title: 'کباب اول',
//     ingredients: ['ماده ۲', 'ماده ۳', 'ماده ۴', 'ماده ۵'],
//     price: '60000',
//     imgSrc: [
//       '../../../../assets/images/1.jpg',
//       '../../../../assets/images/3.jpg',
//       '../../../../assets/images/4.jpg',
//     ],
//     isAddedToCart: false,
//     qty: 0,
//     categories: ['کباب'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '2',
//     title: 'کوفته اول',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۴', 'ماده ۵'],
//     price: '30000',
//     imgSrc: [
//       '../../../../assets/images/3.jpg',
//       '../../../../assets/images/4.jpg',
//       '../../../../assets/images/5.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['کوفته'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '3',
//     title: 'آش اول',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳'],
//     price: '20000',
//     imgSrc: [
//       '../../../../assets/images/4.jpg',
//       '../../../../assets/images/5.jpg',
//       '../../../../assets/images/6.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['آش'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '4',
//     title: 'خوراک اول',
//     ingredients: ['ماده ۳', 'ماده ۴', 'ماده ۵'],
//     price: '80000',
//     imgSrc: [
//       '../../../../assets/images/5.jpg',
//       '../../../../assets/images/6.jpg',
//       '../../../../assets/images/7.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['خوراک'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '5',
//     title: 'کوفته دوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/6.jpg',
//       '../../../../assets/images/7.jpg',
//       '../../../../assets/images/8.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['کوفته'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '11',
//     title: 'خورش دوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/7.jpg',
//       '../../../../assets/images/8.jpg',
//       '../../../../assets/images/9.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['خورش'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '12',
//     title: 'کباب دوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/8.jpg',
//       '../../../../assets/images/9.jpg',
//       '../../../../assets/images/10.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['کباب'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '13',
//     title: 'آش دوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/9.jpg',
//       '../../../../assets/images/10.jpg',
//       '../../../../assets/images/11.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['آش'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '14',
//     title: 'چلو و پلو اول',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/10.jpg',
//       '../../../../assets/images/11.jpg',
//       '../../../../assets/images/12.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['چلو و پلو'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '15',
//     title: 'چلو و پلو دوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/13.jpg',
//       '../../../../assets/images/14.jpg',
//       '../../../../assets/images/15.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['چلو و پلو'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '16',
//     title: 'چلو و پلو سوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/15.jpg',
//       '../../../../assets/images/1.jpg',
//       '../../../../assets/images/2.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['چلو و پلو'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '17',
//     title: 'خورش چهارم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/1.jpg',
//       '../../../../assets/images/2.jpg',
//       '../../../../assets/images/3.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['خورش'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '18',
//     title: 'آش پنجم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/2.jpg',
//       '../../../../assets/images/3.jpg',
//       '../../../../assets/images/4.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['آش'],
//     isDetailsShown: false,
//     shop: 'restaurant',
//   },
//   {
//     id: '6',
//     title: 'پیتزا چهارم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/3.jpg',
//       '../../../../assets/images/4.jpg',
//       '../../../../assets/images/5.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['پیتزا'],
//     isDetailsShown: false,
//     shop: 'fastFood',
//   },
//   {
//     id: '7',
//     title: 'ساندویچ اول',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/4.jpg',
//       '../../../../assets/images/5.jpg',
//       '../../../../assets/images/6.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['ساندویچ'],
//     isDetailsShown: false,
//     shop: 'fastFood',
//   },
//   {
//     id: '8',
//     title: 'همبرگر پنجم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/5.jpg',
//       '../../../../assets/images/6.jpg',
//       '../../../../assets/images/7.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['همبرگر'],
//     isDetailsShown: false,
//     shop: 'fastFood',
//   },
//   {
//     id: '19',
//     title: 'همبرگر اول',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/6.jpg',
//       '../../../../assets/images/7.jpg',
//       '../../../../assets/images/8.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['همبرگر'],
//     isDetailsShown: false,
//     shop: 'fastFood',
//   },
//   {
//     id: '20',
//     title: 'همبرگر دوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/7.jpg',
//       '../../../../assets/images/8.jpg',
//       '../../../../assets/images/9.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['همبرگر'],
//     isDetailsShown: false,
//     shop: 'fastFood',
//   },
//   {
//     id: '21',
//     title: 'همبرگر سوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/8.jpg',
//       '../../../../assets/images/9.jpg',
//       '../../../../assets/images/10.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['همبرگر'],
//     isDetailsShown: false,
//     shop: 'fastFood',
//   },
//   {
//     id: '22',
//     title: 'پیتزا اول',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/9.jpg',
//       '../../../../assets/images/10.jpg',
//       '../../../../assets/images/11.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['پیتزا'],
//     isDetailsShown: false,
//     shop: 'fastFood',
//   },
//   {
//     id: '23',
//     title: 'پیتزا دوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/10.jpg',
//       '../../../../assets/images/11.jpg',
//       '../../../../assets/images/12.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['پیتزا'],
//     isDetailsShown: false,
//     shop: 'fastFood',
//   },
//   {
//     id: '24',
//     title: 'سمبوسه اول',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/11.jpg',
//       '../../../../assets/images/12.jpg',
//       '../../../../assets/images/13.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['سمبوسه'],
//     isDetailsShown: false,
//     shop: 'fastFood',
//   },
//   {
//     id: '25',
//     title: 'سمبوسه دوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/12.jpg',
//       '../../../../assets/images/13.jpg',
//       '../../../../assets/images/14.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['سمبوسه 3'],
//     isDetailsShown: false,
//     shop: 'fastFood',
//   },
//   {
//     id: '9',
//     title: 'چای سبز',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/13.jpg',
//       '../../../../assets/images/14.jpg',
//       '../../../../assets/images/15.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['چای'],
//     isDetailsShown: false,
//     shop: 'coffeeShop',
//   },
//   {
//     id: '10',
//     title: 'بستنی اول',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/14.jpg',
//       '../../../../assets/images/15.jpg',
//       '../../../../assets/images/1.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['بستنی'],
//     isDetailsShown: false,
//     shop: 'coffeeShop',
//   },
//   {
//     id: '26',
//     title: 'بستنی دوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/15.jpg',
//       '../../../../assets/images/1.jpg',
//       '../../../../assets/images/2.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['بستنی'],
//     isDetailsShown: false,
//     shop: 'coffeeShop',
//   },
//   {
//     id: '27',
//     title: 'چای سیاه',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/1.jpg',
//       '../../../../assets/images/2.jpg',
//       '../../../../assets/images/3.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['چای'],
//     isDetailsShown: false,
//     shop: 'coffeeShop',
//   },
//   {
//     id: '28',
//     title: 'قهوه اول',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/2.jpg',
//       '../../../../assets/images/3.jpg',
//       '../../../../assets/images/4.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['قهوه'],
//     isDetailsShown: false,
//     shop: 'coffeeShop',
//   },
//   {
//     id: '29',
//     title: 'قهوه سوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/3.jpg',
//       '../../../../assets/images/4.jpg',
//       '../../../../assets/images/5.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['قهوه'],
//     isDetailsShown: false,
//     shop: 'coffeeShop',
//   },
//   {
//     id: '30',
//     title: 'شیک اول',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/4.jpg',
//       '../../../../assets/images/5.jpg',
//       '../../../../assets/images/6.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['شیک'],
//     isDetailsShown: false,
//     shop: 'coffeeShop',
//   },
//   {
//     id: '31',
//     title: 'شیک دوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/5.jpg',
//       '../../../../assets/images/6.jpg',
//       '../../../../assets/images/7.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['شیک'],
//     isDetailsShown: false,
//     shop: 'coffeeShop',
//   },
//   {
//     id: '32',
//     title: 'شیک سوم',
//     ingredients: ['ماده ۱', 'ماده ۲', 'ماده ۳', 'ماده ۵'],
//     price: '12000',
//     imgSrc: [
//       '../../../../assets/images/6.jpg',
//       '../../../../assets/images/7.jpg',
//       '../../../../assets/images/8.jpg',
//     ],

//     isAddedToCart: false,
//     qty: 0,
//     categories: ['شیک'],
//     isDetailsShown: false,
//     shop: 'coffeeShop',
//   },
// ];

// const categories: CategoryInterface[] = [
//   {
//     title: 'آش',
//     imgSrc: '../../../../assets/images/2.jpg',

//     isActive: false,
//     shopType: 'restaurant',
//   },
//   {
//     title: 'خوراک',
//     imgSrc: '../../../../assets/images/3.jpg',

//     isActive: false,
//     shopType: 'restaurant',
//   },
//   {
//     title: 'چلو و پلو',
//     imgSrc: '../../../../assets/images/4.jpg',

//     isActive: false,
//     shopType: 'restaurant',
//   },
//   {
//     title: 'کوفته',
//     imgSrc: '../../../../assets/images/5.jpg',

//     isActive: false,
//     shopType: 'restaurant',
//   },
//   {
//     title: 'کباب',
//     imgSrc: '../../../../assets/images/6.jpg',

//     isActive: false,
//     shopType: 'restaurant',
//   },
//   {
//     title: 'خورش',
//     imgSrc: '../../../../assets/images/7.jpg',

//     isActive: false,
//     shopType: 'restaurant',
//   },
//   {
//     title: 'قهوه',
//     imgSrc: '../../../../assets/images/8.jpg',

//     isActive: false,
//     shopType: 'coffeeShop',
//   },
//   {
//     title: 'چای',
//     imgSrc: '../../../../assets/images/9.jpg',

//     isActive: false,
//     shopType: 'coffeeShop',
//   },
//   {
//     title: 'بستنی',
//     imgSrc: '../../../../assets/images/10.jpg',

//     isActive: false,
//     shopType: 'coffeeShop',
//   },
//   {
//     title: 'شیک',
//     imgSrc: '../../../../assets/images/11.jpg',

//     isActive: false,
//     shopType: 'coffeeShop',
//   },
//   {
//     title: 'پیتزا',
//     imgSrc: '../../../../assets/images/12.jpg',

//     isActive: false,
//     shopType: 'fastFood',
//   },
//   {
//     title: 'ساندویچ',
//     imgSrc: '../../../../assets/images/13.jpg',

//     isActive: false,
//     shopType: 'fastFood',
//   },
//   {
//     title: 'همبرگر',
//     imgSrc: '../../../../assets/images/14.jpg',

//     isActive: false,
//     shopType: 'fastFood',
//   },
//   {
//     title: 'سمبوسه',
//     imgSrc: '../../../../assets/images/15.jpg',

//     isActive: false,
//     shopType: 'fastFood',
//   },
// ];

// export { foodItems, categories };
