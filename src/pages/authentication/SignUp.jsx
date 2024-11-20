import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-light.png"

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        transactionPassword: "",
        password: "",
        confirmPassword: "",
        gender: "",
        invitationCode: "",
        termsAccepted: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert("Please accept the terms and conditions to continue.");
            return;
        }
        console.log("Form Submitted: ", formData);
        // Handle sign-up logic
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg md:my-5 w-full max-w-7xl">
                <img
                    src={logo}// Replace with your logo path
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
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Transaction Password</label>
                        <input
                            type="password"
                            name="transactionPassword"
                            value={formData.transactionPassword}
                            onChange={handleChange}
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
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Confirm your password"
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
                                    value="Male"
                                    onChange={handleChange}
                                    checked={formData.gender === "Male"}
                                />
                                <span>Male</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    onChange={handleChange}
                                    checked={formData.gender === "Female"}
                                />
                                <span>Female</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Invitation Code</label>
                        <input
                            type="text"
                            name="invitationCode"
                            value={formData.invitationCode}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter invitation code"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            className="custom-checkbox"
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
                        onClick={() => navigate("/home")}
                        className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-500"
                    >
                        Register
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
