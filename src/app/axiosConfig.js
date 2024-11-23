import axios from "axios";
import { BASEURL } from "../constants/api.routes";
import authService from "./service/auth.service";
import { toast } from "sonner";

let isRefreshing = false;
let refreshSubscribers = [];

// Notify all subscribers of the new token
const onTokenRefreshed = (token) => {
    refreshSubscribers.forEach((callback) => callback(token));
    refreshSubscribers = [];
};

// Add a new subscriber for the token refresh
const addRefreshSubscriber = (callback) => {
    refreshSubscribers.push(callback);
};

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
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    const refreshResponse = await authService.refreshAccessToken();
                    isRefreshing = false;
                    if (refreshResponse.success) {
                        localStorage.setItem("accessToken", refreshResponse.token);
                        onTokenRefreshed(refreshResponse.token);
                        return axiosInstance(originalRequest);
                    } else {
                        toast.error("Session expired. Please log in again.");
                        window.location.href = "/login"; // Redirect to login
                        return Promise.reject(error);
                    }
                } catch (refreshError) {
                    isRefreshing = false;
                    toast.error("Unable to refresh session. Please log in again.");
                    window.location.href = "/login"; // Redirect to login
                    return Promise.reject(refreshError);
                }
            }

            // Wait for the new token
            return new Promise((resolve) => {
                addRefreshSubscriber((token) => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    resolve(axiosInstance(originalRequest));
                });
            });
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;

export const refreshAxiosInstance = axios.create({
    baseURL: BASEURL,
});
