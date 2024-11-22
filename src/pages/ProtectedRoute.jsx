import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    // Check if the user is authenticated (presence of a valid token)
    const token = localStorage.getItem("accessToken");

    if (!token) {
        // Redirect to login if no token is found
        return <Navigate to="/" replace />;
    }

    // Render the child routes (protected)
    return <Outlet />;
};

export default ProtectedRoute;
