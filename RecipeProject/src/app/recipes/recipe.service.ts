import { Injectable,EventEmitter } from '@angular/core';
import {Recipe} from './recipe';
import { Ingredient } from '../shared/ingredient';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-9aG2gYZFosr3uk_a5CM7-dMmO3cvGobV1XKkz7viKql1Iju', [
      new Ingredient('French fries',2),
      new Ingredient('Pork meat',3)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDvYoHnBxJqKn7LqSJF6ojeZwopsZzVuHfeCJSIFSShCZoaSV9A', [])
];
  constructor(private http:Http) { }

  getRecipes(){
    return this.recipes;
  }
  
  getRecipe(id:number){
    return this.recipes[id];

  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe) {
    
    const ingredients = new Array<Ingredient>();
    newRecipe.ingredients.forEach(element => {
      ingredients.push(new Ingredient(element.name,element.amount));
    });
    const recipe=new Recipe(newRecipe.name,newRecipe.description,newRecipe.imagePath,ingredients);

    
    this.recipes[this.recipes.indexOf(oldRecipe)] = recipe;
    
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipeproject-161b7.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipeproject-161b7.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }
}
