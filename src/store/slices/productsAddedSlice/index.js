import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: JSON.parse(localStorage.getItem('productsAdded')) || [],
    filterProducts: [],
    count: JSON.parse(localStorage.getItem('productsAdded')) ? JSON.parse(localStorage.getItem('productsAdded')).length : 0,
    reduceSum: JSON.parse(localStorage.getItem('productsAdded')) ? JSON.parse(localStorage.getItem('productsAdded')).reduce((count, item) => count + item.cost,0) : 0,
}

const productsAddedSlice = createSlice({
    name: 'productsAdded',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            localStorage.setItem('productsAdded', JSON.stringify(state.products));
            state.count = JSON.parse(localStorage.getItem('productsAdded')).length;
            state.reduceSum = JSON.parse(localStorage.getItem('productsAdded')).reduce((count, item) => count + item.cost,0)
        },
        addFilteredProducts: (state, action) => {
            state.filterProducts = action.payload;
        }
    },
})

export const {addProduct, addFilteredProducts} = productsAddedSlice.actions;
export default productsAddedSlice.reducer;