import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    // Lazy loading declaration
    loadChildren: () => import('./recipes/recipes.module').then((m) => m.default),
  },
  {
    path: 'shopping-list',
    // Lazy loading declarations
    loadChildren: () => import('./shopping-list/shopping-list.module').then((m) => m.default),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules, // prelaod lazy loading
  })],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
