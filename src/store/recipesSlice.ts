import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipe } from "../types/recipe.types";

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
	const response = await axios.get<Recipe[]>("https://dummyjson.com/recipes");
	return response.data;
});

const recipesSlice = createSlice({
	name: "recipes",
	initialState: [] as Recipe[],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchRecipes.fulfilled, (_, action) => {
			return action.payload;
		});
	},
});

export default recipesSlice.reducer;
