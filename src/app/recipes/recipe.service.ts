import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes:Recipe[] = [
        new Recipe(
            'Carbonara', 
            'Italian Carbonaray',
            'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg',
            [
                new Ingredient('Pasta', 5),
                new Ingredient('cheese', 10)
            ]
        ),
        new Recipe(
            'Panini', 
            'Italian Panini', 
            'https://cdn.tasteatlas.com/images/dishes/d79ca861678f44b8b8f9bbe532fda8ff.jpg',
            [
                new Ingredient('Pasta', 5),
                new Ingredient('Tomatoes', 10)
            ]
        ),
        new Recipe(
            'Pasta', 
            'Italian Pasta', 
            'https://img.taste.com.au/SHiv8Nwo/w643-h428-cfill-q90/taste/2016/11/pasta-e-fagioli-95155-1.jpeg',
            [
                new Ingredient('Pasta', 5),
                new Ingredient('Italian', 10)
            ]
        )
    ];
    
    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}