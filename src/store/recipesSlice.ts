import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipe, RecipesState } from "../types/recipe.types";

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
	const response = await axios.get<Recipe[]>("https://dummyjson.com/recipes");
	console.log("API Response: ", response.data);
	return response.data;
});

const recipesSlice = createSlice({
	name: "recipes",
	initialState: { recipes: [], isLoading: true } as RecipesState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRecipes.fulfilled, (state, action) => {
				state.recipes = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchRecipes.rejected, (state, action) => {
				console.log(action.error.message);
				state.isLoading = false;
			})
			.addCase(fetchRecipes.pending, (state) => {
				state.isLoading = true;
			});
	},
});

export default recipesSlice.reducer;
