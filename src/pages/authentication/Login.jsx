import { useState } from "react";
import backgroundImage from "../../assets/login.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            navigate("/home");
        }, 2000);
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    filter: "blur(4px)",
                }}
            ></div>

            {/* Form Layer */}
            <motion.div
                initial={fadeIn("up", null).initial}
                whileInView={fadeIn("up", 1 * 2).animate}
                className="relative z-10 bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
            >
                {/* Logo */}
                <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>

                {/* Login Form */}
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username/Phone
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username/Phone"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-400 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                {/* Create Account Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        Don&apos;t have an account?{" "}
                        <a href="/create-account" className="text-red-600 font-medium">
                            Create now!
                        </a>
                    </p>
                </div>
            </motion.div>

            {/* Success Popup */}
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
                >
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs text-center">
                        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800">Login Successful!</h2>
                        <p className="text-gray-600 mt-2 mb-4">You have successfully logged in.</p>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Login;
