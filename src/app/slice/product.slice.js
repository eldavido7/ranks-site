import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchProductsStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchProductsSuccess(state, action) {
            state.isLoading = false;
            state.products = action.payload || []; // Store products
        },
        fetchProductsFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload; // Store error
        },
    },
});

export const {
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
} = productSlice.actions;

export default productSlice.reducer;
