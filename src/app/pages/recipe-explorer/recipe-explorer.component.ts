import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { RecipeListComponent } from '../../components/dish-list/dish-list.component';

@Component({
  selector: 'app-recipe-explorer',
  standalone: true,
  imports: [RouterLink, RecipeListComponent],
  templateUrl: './recipe-explorer.component.html',
  styleUrls: ['./recipe-explorer.component.css']
})
export class RecipeExplorerComponent {
  recipeData = inject(RecipesService)

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      this.recipeData.changeTimeLevel(params['time'], params['level'])
    });
  }
}