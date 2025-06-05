import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios, { AxiosError } from 'axios';
import { Observable, tap } from 'rxjs';
import { Recipe } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = []

  visitedRecipesID: number[] = []

  selectedRecipe: Recipe | null = null

  time: 'breakfast' | 'lunch' | 'dinner' = 'breakfast'
  level: 'all' | 'easy' | 'medium' = 'all'

  mainRecipes: Recipe[] = []

  async fetchRecipes(): Promise<void> {
    try {
      const res = await axios.get('https://dummyjson.com/recipes?limit=50');
      console.log(res.data.recipes);
      this.recipes = res.data.recipes

      this.changeMainRecipes()
    } catch (error: AxiosError | unknown) {
      console.error('error!!!!!!!:', error);
    }
  }

  changeTimeLevel(newTime: 'breakfast' | 'lunch' | 'dinner', newLevel: 'all' | 'easy' | 'medium'): void {
    this.time = newTime
    this.level = newLevel
    this.changeMainRecipes()
  }

  changeMainRecipes(): void {
    this.mainRecipes = this.recipes.filter((recipe: Recipe) => (this.level !== 'all' ? recipe.difficulty.toLocaleLowerCase() === this.level : true) && recipe.mealType.map(meal => meal.toLocaleLowerCase()).includes(this.time))
  }

  async changeSelectedRecipe(id: number): Promise<void> {
    if (!this.recipes.length) {
      await this.fetchRecipes()
    }
    this.selectedRecipe = this.recipes.find(recipe => recipe.id === +id) ?? null
    const visitedRecipes: number[] = JSON.parse(localStorage.getItem('visitedRecipes') ?? '[]')
    localStorage.setItem('visitedRecipes', JSON.stringify([...visitedRecipes, id]))
  }

  getUnVisitedRecipes(): Recipe[] {
    // if (!this.recipes.length) {
    //   await this.fetchRecipes()
    // }
    const visitedRecipes: number[] = JSON.parse(localStorage.getItem('visitedRecipes') ?? '[]').map(Number)
    return this.recipes.filter((recipe: Recipe) => !visitedRecipes.includes(recipe.id))
  }
}