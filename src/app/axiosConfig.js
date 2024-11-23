import axios from "axios";
import { BASEURL } from "../constants/api.routes";
import authService from "./service/auth.service";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

// Create Axios instance
const axiosInstance = axios.create({
    baseURL: BASEURL,
});

// Request interceptor to include access token
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
// Response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Attempt to refresh the token
                const refreshResponse = await authService.refreshAccessToken();
                if (refreshResponse.success) {
                    // Set the new token on the original request
                    originalRequest.headers.Authorization = `Bearer ${refreshResponse.token}`;
                    return axiosInstance(originalRequest);
                } else {
                    // Refresh failed, notify user and redirect to login
                    console.error("Token refresh failed:", refreshResponse.message);
                    toast.error("Session expired. Please log in again.");
                    navigate("/login"); // Redirect to the login page
                }
            } catch (refreshError) {
                console.error("Error during token refresh:", refreshError);
                toast.error("Unable to refresh session. Please log in again.");
                navigate("/login"); // Redirect to the login page
            }
        } else if (error.response?.status === 401) {
            console.error("401 Unauthorized:", error.response.data?.message || "Unauthorized access.");
            toast.error(error.response.data?.message || "Unauthorized access. Please log in.");
            navigate("/login"); // Redirect to the login page
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;

export const refreshAxiosInstance = axios.create({
    baseURL: BASEURL,
    headers: {
        // Ensure no Authorization header is sent with the refresh request
        Authorization: null,
    },
});
