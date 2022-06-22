import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientQuantity') ingredientQuantity: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(){
    console.log(this.ingredientName.nativeElement.value)
    const newIngredient = new Ingredient(this.ingredientName.nativeElement.value,this.ingredientQuantity.nativeElement.value)
    this.ingredientAdded.emit(newIngredient)
  }

}
