import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import {Recipe} from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'dp-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {
  
  recipes: Recipe[] =[];
  
  constructor(private recipeServices:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeServices.getRecipes();
    this.recipeServices.recipesChanged.subscribe(
      (recipes:Recipe[])=>this.recipes=recipes
    );
  }

}
