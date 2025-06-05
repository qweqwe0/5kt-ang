import { Component, inject } from '@angular/core';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipes';
  recipes = inject(RecipesService)
  constructor() {
    this.recipes.fetchRecipes()
  }
}
