import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import AuthInterceptorService from './auth/auth/auth-interceptor.service';
import RecipeService from './recipes/recipe.service';
import ShoppingListService from './shopping-list/shopping-list.service';

@NgModule({
  providers: [
    ShoppingListService, // services dont need to be exported
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export default class CoreModule {

}
