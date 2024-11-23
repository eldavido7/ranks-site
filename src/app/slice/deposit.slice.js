import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deposits: [],
    isLoading: false,
    isSubmitting: false,
    error: null,
    successMessage: null,
};

const depositSlice = createSlice({
    name: "deposit",
    initialState,
    reducers: {
        fetchDepositsStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchDepositsSuccess(state, action) {
            state.isLoading = false;
            state.deposits = action.payload;
        },
        fetchDepositsFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        submitDepositStart(state) {
            state.isSubmitting = true;
            state.error = null;
            state.successMessage = null;
        },
        submitDepositSuccess(state, action) {
            state.isSubmitting = false;
            state.successMessage = action.payload; // Success message
        },
        submitDepositFailure(state, action) {
            state.isSubmitting = false;
            state.error = action.payload;
        },
        clearDepositState(state) {
            state.error = null;
            state.successMessage = null;
        },
    },
});

export const {
    fetchDepositsStart,
    fetchDepositsSuccess,
    fetchDepositsFailure,
    submitDepositStart,
    submitDepositSuccess,
    submitDepositFailure,
    clearDepositState,
} = depositSlice.actions;

export default depositSlice.reducer;
