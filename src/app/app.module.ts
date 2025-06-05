import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-page/home-page.component';
import { RecipeExplorerComponent } from './pages/recipe-explorer/recipe-explorer.component';
import { PageRecipeComponent } from './pages/page-recipe/page-recipe.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipeListComponent } from './components/dish-list/dish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RecipeExplorerComponent,
    RouterLink,
    RecipeListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
