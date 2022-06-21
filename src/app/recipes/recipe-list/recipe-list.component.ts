import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() allRecipes: Recipe[] = []
  @Output() parent_onNewRecipeSelect = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.allRecipes)
  }

  list_onNewRecipeSelect(id){
    this.parent_onNewRecipeSelect.emit(id)
  }

}
