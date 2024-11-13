import backgroundImage from "../../assets/login.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion";

const Login = () => {
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
                className="relative z-10 bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                {/* Logo */}
                <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>

                {/* Login Form */}
                <form className="space-y-6">
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
                        Dont have an account?{" "}
                        <a href="/create-account" className="text-red-600 font-medium">
                            Create now!
                        </a>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
