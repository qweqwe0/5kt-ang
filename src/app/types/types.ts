export interface Recipe {
    id: number;
    name: string;
    cuisine: string;
    difficulty: string;
    servings: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    caloriesPerServing: number;
    image: string;
    ingredients: string[];
    instructions: string[];
    mealType: string[];
    tags: string[];
    rating: number;
    reviewCount: number;
    userId: number;
}