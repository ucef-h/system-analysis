import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingredientChangedSubject: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this. ingredientChangedSubject = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    );
  }

  ngOnDestroy(): void {
    this. ingredientChangedSubject.unsubscribe();
  }

}
