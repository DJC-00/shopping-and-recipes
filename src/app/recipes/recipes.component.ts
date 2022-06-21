import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  allRecipes: Recipe[] = [
    new Recipe(0, 'food', 'tastes good', 'https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg'),
    new Recipe(1, 'Pizza', 'tastes like pizza','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=480:*'),
    new Recipe(2, 'Blackened Chicken', 'tastes like chicken', 'https://www.skinnytaste.com/wp-content/uploads/2016/08/Blackened-Chicken-Fiesta-Salad.jpg'),
    new Recipe(3, 'Fajitas', 'FIESTA!', 'https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg', undefined, [{name:'Chicken', quantity:3},{name:'Cilantro', quantity:2},{name:'Peppers', quantity:1},{name:'Beans', quantity:5}])
  ];
  selectedRecipeId:number;
  currentRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedRecipe(id){
    if (this.selectedRecipeId != id){
      this.selectedRecipeId = id;
      console.log(this.currentRecipe)
      this.currentRecipe = this.allRecipes[this.selectedRecipeId]
    }

  }

}
