import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import {BASE_URL} from '../../../const'
import axios from "axios";

const initialState = {
    products: [],
    status: 'idle',
    error: null,
}

export const fetchProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        const response = await axios.get(BASE_URL);
        return response.data.products;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = 'Loading'
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'Succeeded'
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'Failder'
            state.error = action.error.message;
        })
    }
})

export default productsSlice.reducer;