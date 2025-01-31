import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../types/product.types";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
    return response.data
})


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [] as Product[],
        isLoading: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false;
        })
    }
})

export default productsSlice.reducer;