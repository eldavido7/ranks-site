import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: !!localStorage.getItem("userToken"),
    token: localStorage.getItem("userToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    user: null,
    wallet: null,
    error: null,
    registrationSuccess: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
            state.error = null;
        },
        setUserProfile(state, action) {
            state.user = action.payload.userData;
            state.wallet = action.payload.walletData;
        },
        loginFailure(state, action) {
            state.isAuthenticated = false;
            state.token = null;
            state.refreshToken = null;
            state.user = null;
            state.wallet = null;
            state.error = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.token = null;
            state.refreshToken = null;
            state.user = null;
            state.wallet = null;
            state.error = null;

            localStorage.removeItem("userToken");
            localStorage.removeItem("refreshToken");
        },
        tokenRefreshed(state, action) {
            state.token = action.payload.token;

            localStorage.setItem("userToken", state.token);
        },
        registerSuccess(state) {
            state.registrationSuccess = true;
            state.error = null;
        },
        registerFailure(state, action) {
            state.registrationSuccess = false;
            state.error = action.payload;
        },
    },
});

export const {
    loginSuccess,
    setUserProfile,
    loginFailure,
    logout,
    tokenRefreshed,
    registerSuccess,
    registerFailure,
} = authSlice.actions;

export default authSlice.reducer;
