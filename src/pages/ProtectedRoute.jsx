import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import authService from "../app/service/auth.service";
import { homepage } from "../constants/app.routes";

const ProtectedRoute = () => {
    const [isValid, setIsValid] = useState(null); // Track token validation status
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        const validateAndHandleAuth = async () => {
            if (!token || !isAuthenticated || !authService.validateToken(token)) {
                authService.logout(); // Logout the user
                setIsValid(false); // Mark token as invalid
            } else {
                setIsValid(true); // Mark token as valid
            }
        };

        validateAndHandleAuth();
    }, [isAuthenticated, token]);

    if (isValid === null) {
        // Show a loader while checking authentication
        return <div>Loading...</div>;
    }

    if (!isValid) {
        // Redirect to homepage if token is invalid
        return <Navigate to={homepage} replace />;
    }

    // Render the child routes if authentication is valid
    return <Outlet />;
};

export default ProtectedRoute;
