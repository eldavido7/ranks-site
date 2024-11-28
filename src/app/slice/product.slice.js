import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        currentGame: null, // Store the current game data
        isLoading: false,
        error: null,
    },
    reducers: {
        // Existing reducers
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

        // New reducers for currentGame
        fetchCurrentGameStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchCurrentGameSuccess(state, action) {
            state.isLoading = false;
            state.currentGame = action.payload || null; // Store current game data
        },
        fetchCurrentGameFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload; // Store error
        },

        // Reducer for submitting a game (playGame)
        playGameStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        playGameSuccess(state, action) {
            state.isLoading = false;
            state.currentGame = action.payload; // Update current game data after submission
        },
        playGameFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload; // Store error
        },
    },
});

export const {
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchCurrentGameStart,
    fetchCurrentGameSuccess,
    fetchCurrentGameFailure,
    playGameStart,
    playGameSuccess,
    playGameFailure,
} = productSlice.actions;

export default productSlice.reducer;
