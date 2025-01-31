import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import recipesReducer from "./recipesSlice";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		recipes: recipesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>; //type for the state
export type AppDispatch = typeof store.dispatch; //type for an action
