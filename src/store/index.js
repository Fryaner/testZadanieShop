import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/prodcutsSlice";
import productsinTrashReducer from './slices/productsAddedSlice/index'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        productsAdded: productsinTrashReducer,
    },
})