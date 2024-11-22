import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppInit from "../app/state.helper";
import { home, login } from "../constants/app.routes";

const Loader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("userToken");
            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            await delay(2000); // Optional delay for smoother user experience

            if (token) {
                await AppInit({ dispatch, isAuthenticated: true });
                navigate(home);
            } else {
                navigate(login);
            }
        };

        checkAuth();
    }, [dispatch, navigate]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div id="container" className="flex space-x-2">
                <div id="ball-1" className="circle"></div>
                <div id="ball-2" className="circle"></div>
                <div id="ball-3" className="circle"></div>
            </div>
        </div>
    );
};

export default Loader;
