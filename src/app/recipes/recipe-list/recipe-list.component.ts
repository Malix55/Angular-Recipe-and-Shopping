import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent { 
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-2.jpg.webp'),
    new Recipe('A test Recipe','this is simply a test','https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-2.jpg.webp')
  ];

} 
