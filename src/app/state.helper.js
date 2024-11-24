import authService from "./service/auth.service";
import { setUserProfile } from "./slice/auth.slice";
import { toast } from "sonner";

async function AppInit({ dispatch, isAuthenticated }) {
    try {
        if (isAuthenticated) {
            // Fetch the profile
            const profileResponse = await authService.fetchProfile();
            if (profileResponse.success) {
                dispatch(setUserProfile(profileResponse.data));
                dispatch()
                console.log("User profile initialized successfully.");
            } else {
                toast.error(profileResponse.message || "Failed to fetch user profile.");
            }
        }
        return true; // Initialization successful
    } catch (error) {
        console.error("Initialization error:", error);
        toast.error("An error occurred during initialization. Please try again.");
        return false; // Initialization failed
    }
}

export default AppInit;
