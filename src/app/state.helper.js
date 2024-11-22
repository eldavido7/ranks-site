import authService from './service/auth.service';
import { setUserProfile, logout } from './slice/auth.slice';

async function AppInit({ dispatch, isAuthenticated }) {
    try {
        if (isAuthenticated) {
            // Fetch the profile data using the `meAPI`
            const profileResponse = await authService.fetchProfile(); // Corrected method name
            if (profileResponse.success) {
                // Update the profile in the Redux state
                dispatch(setUserProfile(profileResponse.data));
                console.log("User profile initialized successfully.");
            } else {
                console.warn("Failed to fetch user profile:", profileResponse.message);
            }
        }
        return true;
    } catch (error) {
        // Handle any global errors, e.g., token expiration
        if (error.response?.status === 401) {
            console.error("Unauthorized: Logging out the user.");
            dispatch(logout());
        } else {
            console.error("Initialization error:", error.message || error);
        }
        return false;
    }
}

export default AppInit;
