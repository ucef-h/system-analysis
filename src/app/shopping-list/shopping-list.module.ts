import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.modules';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      // path has been chaned to '' instead of 'shopping-list' in order for lazy loading to work
      { path: '', component: ShoppingListComponent },
    ]),
    SharedModule,
  ],
})
export class ShoppingListModule {

}
