import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home-page.component';
import { RecipeExplorerComponent } from './pages/recipe-explorer/recipe-explorer.component';
import { PageRecipeComponent } from './pages/page-recipe/page-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'breakfast/all',
        pathMatch: 'full',
      },
      {
        path: 'recipe/:id',
        component: PageRecipeComponent
      },
      {
        path: ':time/:level',
        component: RecipeExplorerComponent,
      },
      {
        path: '**',
        redirectTo: 'breakfast/all',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
