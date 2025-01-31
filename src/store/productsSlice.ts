import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product.types";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
	return response.data;
});

const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: [] as Product[],
		isLoading: true,
	},
	reducers: {},
	//better to use with APIs:
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.products = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false;
				throw new Error(action.error.message);
			})
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true;
			});
	},
});

export default productsSlice.reducer;
