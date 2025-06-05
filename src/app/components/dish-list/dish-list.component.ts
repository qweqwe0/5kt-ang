import { Component, inject } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dish-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dish-list.component.html',
  styleUrl: './dish-list.component.css'
})
export class RecipeListComponent {
  recipes = inject(RecipesService)
}
