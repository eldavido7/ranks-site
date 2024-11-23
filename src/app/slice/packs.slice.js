import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    packs: [],
    isLoading: false,
    error: null,
};

const packsSlice = createSlice({
    name: "packs",
    initialState,
    reducers: {
        fetchPacksStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchPacksSuccess(state, action) {
            state.isLoading = false;
            state.packs = action.payload;
        },
        fetchPacksFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchPacksStart, fetchPacksSuccess, fetchPacksFailure } = packsSlice.actions;

export default packsSlice.reducer;
