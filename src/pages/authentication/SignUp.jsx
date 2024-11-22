import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner"; // Import Sonner toast
import logo from "../../assets/logo-light.png";
import authService from "../../app/service/auth.service";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone_number: "",
        password: "",
        confirmPassword: "",
        first_name: "",
        last_name: "",
        gender: "",
        transactional_password: "",
        invitation_code: "",
        termsAccepted: false,
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for terms acceptance
        if (!formData.termsAccepted) {
            toast.error("Please accept the terms and conditions to continue.");
            return;
        }

        // Check for password match
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        // Ensure all fields are filled
        for (const [key, value] of Object.entries(formData)) {
            if (key !== "termsAccepted" && !value) {
                toast.error(`The ${key.replace("_", " ")} field is required.`);
                return;
            }
        }

        setLoading(true);

        const payload = {
            username: formData.username,
            email: formData.email,
            phone_number: formData.phone_number,
            password: formData.password,
            first_name: formData.first_name,
            last_name: formData.last_name,
            gender: formData.gender,
            transactional_password: formData.transactional_password,
            invitation_code: formData.invitation_code,
        };

        try {
            const response = await authService.register(payload);

            if (response.success) {
                toast.success("Registration successful!");
                setTimeout(() => navigate("/"), 2000); // Redirect to login page
            } else {
                toast.error(response.message); // Show error message from backend
            }
        } catch (err) {
            console.error(err);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 min-h-screen">
            <Toaster position="top-right" /> {/* Add the toast container */}
            <div className="bg-white p-8 rounded-lg shadow-lg md:my-5 w-full max-w-7xl overflow-y-auto max-h-screen">
                <img
                    src={logo}
                    alt="Logo"
                    className="mx-auto mb-4 w-24"
                />
                <h2 className="text-2xl font-semibold text-center mb-6">Register Now</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            autoComplete="username"
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Phone Number</label>
                        <input
                            type="tel"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            autoComplete="tel"
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            autoComplete="given-name"
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter your first name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            autoComplete="family-name"
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter your last name"
                            required
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-700 font-medium">Gender</span>
                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="M"
                                    onChange={handleChange}
                                    checked={formData.gender === "M"}
                                    required
                                />
                                <span>Male</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="F"
                                    onChange={handleChange}
                                    checked={formData.gender === "F"}
                                    required
                                />
                                <span>Female</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Transaction Password</label>
                        <input
                            type="password"
                            name="transactional_password"
                            value={formData.transactional_password}
                            onChange={handleChange}
                            autoComplete="new-password"
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter a transaction password"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="new-password"
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            autoComplete="new-password"
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Invitation Code</label>
                        <input
                            type="text"
                            name="invitation_code"
                            value={formData.invitation_code}
                            onChange={handleChange}
                            autoComplete="off"
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter invitation code"
                            required
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            className="custom-checkbox"
                            required
                        />
                        <label className="text-gray-700">
                            I agree with the{" "}
                            <a href="#" className="text-red-600 hover:underline">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-500"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Register"}
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="text-red-600 hover:underline"
                    >
                        Back to Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
