import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  allIngerdients:Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Potatoes', 2),
    new Ingredient('Salmon Fillets', 2),
    new Ingredient('Dill', 1),
    new Ingredient('Oregano', 12)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(newIngredient:Ingredient){
    this.allIngerdients.push(newIngredient)
    console.log(this.allIngerdients)

  }

}
