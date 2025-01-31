import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipes } from "../types/recipe.types";

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
	const response = await axios.get<Recipes>("https://dummyjson.com/recipes");
	return response.data;
});

const recipesSlice = createSlice({
	name: "recipes",
	initialState: { recipes: [], isLoading: true } as Recipes,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRecipes.fulfilled, (state, action) => {
				state.recipes = action.payload.recipes;
				state.isLoading = false;
			})
			.addCase(fetchRecipes.rejected, (state, action) => {
				state.isLoading = false;
				throw new Error(action.error.message);
			})
			.addCase(fetchRecipes.pending, (state) => {
				state.isLoading = true;
			});
	},
});

export default recipesSlice.reducer;
