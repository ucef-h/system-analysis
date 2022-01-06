import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Carbonara', 'Italian Carbonaray', 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg'),
    new Recipe('Panini', 'Italian Panini', 'https://cdn.tasteatlas.com/images/dishes/d79ca861678f44b8b8f9bbe532fda8ff.jpg'),
    new Recipe('Pasta', 'Italian Pasta', 'https://img.taste.com.au/SHiv8Nwo/w643-h428-cfill-q90/taste/2016/11/pasta-e-fagioli-95155-1.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
    return;
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
