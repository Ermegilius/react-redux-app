export interface Recipe {
	id: number;
	name: string;
	ingredients: string[];
}

export interface Recipes {
	recipes: Recipe[];
	isLoading: boolean;
}
