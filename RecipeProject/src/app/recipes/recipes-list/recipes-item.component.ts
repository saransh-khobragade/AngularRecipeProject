import { Component, OnInit,Input } from '@angular/core';
import{Recipe} from '../recipe'
@Component({
  selector: 'dp-recipes-item',
  templateUrl: './recipes-item.component.html'
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Input() recipeId:number;

  constructor() { }

  ngOnInit() {
  }

}
