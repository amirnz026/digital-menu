import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxRerenderModule } from 'ngx-rerender';

import { HeaderComponent } from './components/partials/header/header.component';
import { SearchbarComponent } from './components/partials/searchbar/searchbar.component';
import { CategoryItemComponent } from './components/categories/category-item/category-item.component';
import { CategoriesContainerComponent } from './components/categories/categories-container/categories-container.component';
import { FoodItemComponent } from './components/foods/food-item/food-item.component';
import { FoodsContainerComponent } from './components/foods/foods-container/foods-container.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { FoodDetailsComponent } from './components/foods/food-details/food-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { reducers } from './store/reducers';
import { FoodsEffects } from './store/effects';
import { FoodsService } from './services/foods.service';
import { FooterSubmitComponent } from './components/footers/footer-submit/footer-submit.component';
import { FooterMenuComponent } from './components/footers/footer-menu/footer-menu.component';
import { FooterPendingComponent } from './components/footers/footer-pending/footer-pending.component';
import { SucceedPageComponent } from './components/succeed-page/succeed-page.component';
import { CallWaiterComponent } from './components/call-waiter/call-waiter.component';
import { SplashComponent } from './components/splash/splash.component';
import { FormsModule } from '@angular/forms';
import { HoverClassDirective } from './directives/call-waiter.directive';
import { FoodsContainerLoaderComponent } from './components/foods/foods-container/foods-container-loader/foods-container-loader.component';
import { FoodItemLoaderComponent } from './components/foods/food-item/food-item-loader/food-item-loader.component';
import { CategoriesContainerLoaderComponent } from './components/categories/categories-container/categories-container-loader/categories-container-loader.component';
import { CategoryItemLoaderComponent } from './components/categories/category-item/category-item-loader/category-item-loader.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    CategoryItemComponent,
    CategoriesContainerComponent,
    FoodItemComponent,
    FoodsContainerComponent,
    FooterComponent,
    FoodDetailsComponent,
    CartComponent,
    CartItemComponent,
    FooterSubmitComponent,
    FooterMenuComponent,
    FooterPendingComponent,
    SucceedPageComponent,
    CallWaiterComponent,
    SplashComponent,
    HoverClassDirective,
    FoodsContainerLoaderComponent,
    FoodItemLoaderComponent,
    CategoriesContainerLoaderComponent,
    CategoryItemLoaderComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxRerenderModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('foods', reducers),
    EffectsModule.forFeature([FoodsEffects]),
    EffectsModule.forRoot(),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [FoodsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
//s
