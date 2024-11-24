import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    isPasswordLoading: false,
    error: null,
    success: null,
    profilePicture: null, // Added for image handling
    imagePreview: null, // Added for image preview
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        // Profile fetch reducers
        fetchProfileStart(state) {
            state.isLoading = true;
            state.error = null;
            state.success = null;
        },
        fetchProfileSuccess(state, action) {
            state.isLoading = false;
            state.user = action.payload;
            state.profilePicture = action.payload.profile_picture || null; // Set profile picture
        },
        fetchProfileFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Profile update reducers
        updateProfileStart(state) {
            state.isLoading = true;
            state.error = null;
            state.success = null;
        },
        updateProfileSuccess(state, action) {
            state.isLoading = false;
            state.user = action.payload;
            state.profilePicture = action.payload.profile_picture || null; // Update profile picture
            state.success = "Profile updated successfully.";
        },
        updateProfileFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Handle image upload and preview
        setImagePreview(state, action) {
            state.imagePreview = action.payload;
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
            state.error = action.payload;
        },

        clearProfileState(state) {
            state.error = null;
            state.success = null;
        },
    },
});

export const {
    fetchProfileStart,
    fetchProfileSuccess,
    fetchProfileFailure,
    updateProfileStart,
    updateProfileSuccess,
    updateProfileFailure,
    setImagePreview,
    changePasswordStart,
    changePasswordSuccess,
    changePasswordFailure,
    clearProfileState,
} = profileSlice.actions;

export default profileSlice.reducer;
