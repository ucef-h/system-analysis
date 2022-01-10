import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(
        private httpclient: HttpClient,
        private recipeService: RecipeService
    ) {}


    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.httpclient.put(
            'https://system-pos-2b92c-default-rtdb.firebaseio.com/recipes.json',
            recipes
        ).subscribe( response => {
            console.log(response);
        });
    }

    fetchRecipes() {
        return this.httpclient.get<Recipe[]>(
            'https://system-pos-2b92c-default-rtdb.firebaseio.com/recipes.json'
        ).pipe(
            map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
            });
        }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
             })
        );
    }
}