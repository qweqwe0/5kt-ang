import { Component, inject } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-recipe',
  templateUrl: './page-recipe.component.html',
  styleUrl: './page-recipe.component.css'
})
export class PageRecipeComponent {
  recipes = inject(RecipesService)
  constructor(private route: ActivatedRoute, public location: Location) {
    this.route.params.subscribe((params: any) => {
      this.recipes.changeSelectedRecipe(params['id'])
    });
  }
}