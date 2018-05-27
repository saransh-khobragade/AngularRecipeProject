import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class ShoppingListService {

  private items:Ingredient[]=[];

  constructor() { }

  getItem(){
    return this.items;
  }

  addItems(items:Ingredient[]){
    Array.prototype.push.apply(this.items,items);
  }

  addItem(item:Ingredient){
      this.items.push(item);
  }

  editItem(olditem:Ingredient,newitem:Ingredient)
  {
    this.items[this.items.indexOf(olditem)]=newitem;
  }

  deleteItem(item:Ingredient)
  {
    this.items.splice(this.items.indexOf(item),1);
  }
}
