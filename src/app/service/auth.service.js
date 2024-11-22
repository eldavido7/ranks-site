import axios from "axios";
import {
    loginAPI, meAPI, refreshToken as refreshTokenAPI, registerAPI
} from "../../constants/api.routes";
import {
    loginSuccess, loginFailure, setUserProfile, logout, registerSuccess, registerFailure
} from "../slice/auth.slice";
import store from "../store"; // Import the store to access dispatch

const authService = {
    register: async (registrationData) => {
        try {
            const response = await axios.post(registerAPI, registrationData);

            // Dispatch success action
            store.dispatch(registerSuccess());
            console.log(response);

            return { success: true, message: "Registration successful." };
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
            store.dispatch(registerFailure(errorMessage));
            return { success: false, message: errorMessage };
        }
    },
    /**
     * Logs in the user and updates the store with token and user profile.
     */
    login: async (credentials) => {
        try {
            const response = await axios.post(loginAPI, {
                username_or_email: credentials.username,
                password: credentials.password,
            });

            const { access_token, refresh_token, user } = response.data.data;

            // Store tokens in localStorage
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("refreshToken", refresh_token);

            // Dispatch login success
            store.dispatch(loginSuccess({ token: access_token, refreshToken: refresh_token }));
            store.dispatch(setUserProfile(user));

            return { success: true, data: user };
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
            store.dispatch(loginFailure(errorMessage));
            return { success: false, message: errorMessage };
        }
    },

    /**
     * Fetches the current user's profile using the `meAPI` endpoint.
     */
    fetchProfile: async () => {
        try {
            const token = localStorage.getItem("accessToken");

            if (!token) throw new Error("No valid token found.");

            const response = await axios.get(meAPI, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const profile = response.data.data;
            store.dispatch(setUserProfile(profile));

            return { success: true, data: profile };
        } catch (error) {
            // Check for 401 and handle token expiration
            if (error.response?.status === 401) {
                const refreshResult = await authService.handleTokenExpiration();
                if (refreshResult.success) {
                    return await authService.fetchProfile(); // Retry fetching profile
                }
            }
            console.error("Failed to fetch user profile:", error);
            return { success: false, message: error.message || "Failed to fetch profile." };
        }
    },

    /**
     * Refreshes the access token using the refresh token.
     */
    refreshAccessToken: async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");

            if (!refreshToken) throw new Error("No refresh token found.");

            const response = await axios.post(refreshTokenAPI, {
                refresh: refreshToken,
            });

            const newAccessToken = response.data.access_token;

            // Update access token in localStorage
            localStorage.setItem("accessToken", newAccessToken);

            store.dispatch(loginSuccess({ accessToken: newAccessToken }));

            return { success: true, token: newAccessToken };
        } catch (error) {
            console.error("Failed to refresh access token:", error);
            store.dispatch(logout()); // Clear user state on failure
            return { success: false, message: error.message || "Failed to refresh token." };
        }
    },

    /**
     * Logs the user out by clearing tokens and state.
     */
    logout: () => {
        // Clear localStorage and Redux state
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        store.dispatch(logout());
    },

    /**
     * Handles token expiration by refreshing the token or logging out.
     */
    handleTokenExpiration: async () => {
        try {
            const result = await authService.refreshAccessToken();
            return result; // Return the result of refreshing the token
        } catch (error) {
            console.error("Error handling token expiration:", error);
            authService.logout(); // Log out the user on failure
            return { success: false, message: "Session expired. Please log in again." };
        }
    },
};

export default authService;
