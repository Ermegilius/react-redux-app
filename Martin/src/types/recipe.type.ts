export interface Recipe {
    name: string;
    ingredients: string[];
    id: number;
}

export interface Recipes {
    recipes: Recipe[];
    isLoading: boolean;
}