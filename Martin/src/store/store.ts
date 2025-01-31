import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import recipeReducer from "./recipeSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        recipes: recipeReducer,
        cart: cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
