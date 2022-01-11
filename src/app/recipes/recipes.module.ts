import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import SharedModule from '../shared/shared.modules';
import RecipeDetailComponent from './recipe-detail/recipe-detail.component';
import RecipeEditComponent from './recipe-edit/recipe-edit.component';
import RecipeItemComponent from './recipe-list/recipe-item/recipe-item.component';
import RecipeListComponent from './recipe-list/recipe-list.component';
import RecipeStartComponent from './recipe-start/recipe-start.component';
import RecipesRoutingModule from './recipes-routing.module';
import RecipesComponent from './recipes.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [RouterModule, ReactiveFormsModule, RecipesRoutingModule, SharedModule],
  exports: [
    // we would add here any component or service that we might use in any other Module
  ],
})
export default class RecipesModule {}
