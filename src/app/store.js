import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slice"; // Import the auth slice

const store = configureStore({
    reducer: {
        auth: authSlice, // Add auth slice to the store
    },
});

export default store;
