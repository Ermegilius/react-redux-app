import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product.types";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
	return response.data;
});

const productsSlice = createSlice({
	name: "products",
	initialState: [] as Product[],
	reducers: {},
	extraReducers: (builder) => {
		//better to use with APIs
		builder
			.addCase(fetchProducts.fulfilled, (_, action) => {
				//_ means we don't need the state
				return action.payload;
			})
			.addCase(fetchProducts.rejected, (_, action) => {
				//_ means we don't need the state
				console.log(action.error.message);
			});
	},
}); //this is my state

export default productsSlice.reducer;
