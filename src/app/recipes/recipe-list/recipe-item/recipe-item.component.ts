import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() oneRecipe: Recipe;
  // @Output() onNewRecipeSelect = new EventEmitter<number>()
  @Output() onNewRecipeSelect = new EventEmitter<null>()

  constructor() { }

  ngOnInit(): void {
  }

  selectNewRecipe(){
    // this.onNewRecipeSelect.emit(this.oneRecipe.id)
    this.onNewRecipeSelect.emit()
  }

}
