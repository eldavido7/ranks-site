import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    isPasswordLoading: false,
    error: null,
    success: null,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        // Profile update reducers
        updateProfileStart(state) {
            state.isLoading = true;
            state.error = null;
            state.success = null;
        },
        updateProfileSuccess(state, action) {
            state.isLoading = false;
            state.user = action.payload; // Update user profile
            state.success = "Profile updated successfully.";
        },
        updateProfileFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload; // Set error message
        },

        // Password change reducers
        changePasswordStart(state) {
            state.isPasswordLoading = true;
            state.error = null;
            state.success = null;
        },
        changePasswordSuccess(state, action) {
            state.isPasswordLoading = false;
            state.success = action.payload || "Password updated successfully.";
        },
        changePasswordFailure(state, action) {
            state.isPasswordLoading = false;
            state.error = action.payload; // Set error message
        },

        // Utility action to clear state
        clearProfileState(state) {
            state.error = null;
            state.success = null;
        },
    },
});

export const {
    updateProfileStart,
    updateProfileSuccess,
    updateProfileFailure,
    changePasswordStart,
    changePasswordSuccess,
    changePasswordFailure,
    clearProfileState,
} = profileSlice.actions;

export default profileSlice.reducer;
