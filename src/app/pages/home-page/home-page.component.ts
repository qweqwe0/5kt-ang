import { Component, inject } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomeComponent {
  recipes = inject(RecipesService)
}
