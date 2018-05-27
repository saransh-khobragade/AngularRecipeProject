import { Component, OnInit ,Input} from '@angular/core';
import {Recipe} from "../recipe";
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'dp-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription:Subscription;

  constructor(
    private sls:ShoppingListService,
    private router:Router,
    private route:ActivatedRoute,
    private recipesServices:RecipeService) { }

  ngOnInit() {
    this.subscription=this.route.params.subscribe(
      (params:any)=>{
        this.recipeIndex=params['id'];
        this.selectedRecipe=this.recipesServices.getRecipe(this.recipeIndex);
      }
    )
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete()
  {
    this.recipesServices.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredient);
  }

}
