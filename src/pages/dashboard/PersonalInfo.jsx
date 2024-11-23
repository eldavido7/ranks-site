import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GoArrowLeft } from "react-icons/go";
import { toast, Toaster } from "sonner"; // Import Sonner for toasts
import "react-toastify/dist/ReactToastify.css";
import { updateProfile, changePassword } from "../../app/service/profile.service";
import authService from "../../app/service/auth.service";

const PersonalInfo = () => {
    const dispatch = useDispatch();

    // Profile fields
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone_number: "",
        first_name: "",
        last_name: "",
        gender: "",
        referral_code: "",
        // last_connection: "",
        date_joined: "",
    });

    const [profilePicture, setProfilePicture] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    // Password fields
    const [passwordData, setPasswordData] = useState({
        old_password: "",
        new_password: "",
        confirm_new_password: "",
    });

    const [isLoginPasswordModalOpen, setIsLoginPasswordModalOpen] = useState(false);
    const [isWithdrawPasswordModalOpen, setIsWithdrawPasswordModalOpen] = useState(false);

    // Toggle Modals
    const toggleLoginPasswordModal = () => setIsLoginPasswordModalOpen(!isLoginPasswordModalOpen);
    const toggleWithdrawPasswordModal = () => setIsWithdrawPasswordModalOpen(!isWithdrawPasswordModalOpen);

    // Fetch Profile Data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await authService.fetchProfile();
                if (response.success) {
                    const profile = response.data;
                    setFormData({
                        username: profile.username || "",
                        email: profile.email || "",
                        phone_number: profile.phone_number || "",
                        first_name: profile.first_name || "",
                        last_name: profile.last_name || "",
                        gender: profile.gender === "M" ? "Male" : profile.gender === "F" ? "Female" : "Other",
                        referral_code: profile.referral_code || "N/A",
                        // last_connection: new Date(profile.last_connection).toLocaleString() || "N/A",
                        date_joined: new Date(profile.date_joined).toLocaleString() || "N/A",
                    });
                    setProfilePicture(profile.profile_picture); // Profile picture
                } else {
                    toast.error(response.message || "Failed to load profile.");
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                toast.error("An error occurred while fetching your profile.");
            }
        };

        fetchProfile();
    }, []);

    // Handle Profile Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle Image Upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(file); // Save the file for uploading
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Preview image
            };
            reader.readAsDataURL(file);
        }
    };

    // Update Profile
    const handleUpdateProfile = async () => {
        // Validate required fields
        if (!formData.username || !formData.email || !formData.phone_number) {
            toast.error("Username, email, and phone number are required.");
            return;
        }

        const updatedData = { ...formData };

        // Convert gender to the expected format
        updatedData.gender = formData.gender === "Male" ? "M" : formData.gender === "Female" ? "F" : "";

        // Add the profile picture file if it exists
        if (profilePicture) {
            updatedData.profile_picture = profilePicture;
        }

        try {
            const result = await dispatch(updateProfile(updatedData));
            if (result.success) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("An unexpected error occurred.");
        }
    };

    // Handle Password Changes
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChangePassword = async () => {
        // Validate required fields
        if (!passwordData.current_password || !passwordData.new_password || !passwordData.confirm_new_password) {
            toast.error("All password fields are required.");
            return;
        }

        // Ensure new passwords match
        if (passwordData.new_password !== passwordData.confirm_new_password) {
            toast.error("New passwords do not match.");
            return;
        }

        // Prepare data for API
        const payload = {
            current_password: passwordData.current_password,
            new_password: passwordData.new_password,
        };

        try {
            // Dispatch change password action
            const result = await dispatch(changePassword(payload));
            if (result.success) {
                toast.success(result.message);
                toggleLoginPasswordModal(); // Close modal
                setPasswordData({ current_password: "", new_password: "", confirm_new_password: "" }); // Reset fields
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Error changing password:", error);
            toast.error("An unexpected error occurred.");
        }
    };

    return (
        <div className="bg-gray-50 md:p-6 p-2">
            <Toaster position="top-right" />
            <div className="w-fit bg-gray-200 p-2 rounded-lg shadow-sm mb-6">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center text-lg text-red-600"
                >
                    <GoArrowLeft />
                    <h2 className="text-xl font-bold text-gray-800 ml-4">Back</h2>
                </button>
            </div>

            {/* Personal Information Form */}
            <div className="bg-white rounded-lg shadow p-4 space-y-4 mb-6">
                <div>
                    <label className="text-gray-600 font-semibold">Profile Picture</label>
                    <div className="flex items-center space-x-4 mt-2">
                        {(imagePreview || profilePicture) && (
                            <img
                                src={imagePreview || profilePicture}
                                alt="Profile Preview"
                                className="w-16 h-16 rounded-full object-cover border"
                            />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Phone Number</label>
                    <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Gender</label>
                    <input
                        type="text"
                        name="gender"
                        value={formData.gender || ""}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Referral Code</label>
                    <input
                        type="text"
                        name="referral_code"
                        value={formData.referral_code}
                        readOnly
                        className="w-full mt-1 p-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Date Joined</label>
                    <input
                        type="text"
                        name="date_joined"
                        value={formData.date_joined}
                        readOnly
                        className="w-full mt-1 p-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                    />
                </div>
            </div>

            {/* Buttons Section */}
            <div className="md:space-x-4 md:space-y-0 md:flex md:mb-2 mb-52 grid space-y-4">
                <button
                    onClick={handleUpdateProfile}
                    className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-500"
                >
                    Update
                </button>
                <button
                    onClick={toggleLoginPasswordModal}
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500"
                >
                    Change Login Password
                </button>
                <button
                    onClick={toggleWithdrawPasswordModal}
                    className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-500"
                >
                    Change Withdraw Password
                </button>
            </div>

            {/* Login Password Modal */}
            {isLoginPasswordModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
                        <button
                            onClick={toggleLoginPasswordModal}
                            className="absolute top-4 right-4 text-blue-600 font-bold text-lg"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Change Login Password</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="text-gray-600 font-semibold">Current Password</label>
                                <input
                                    type="password"
                                    name="current_password"
                                    value={passwordData.current_password}
                                    onChange={handlePasswordChange}
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <label className="text-gray-600 font-semibold">New Password</label>
                                <input
                                    type="password"
                                    name="new_password"
                                    value={passwordData.new_password}
                                    onChange={handlePasswordChange}
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <label className="text-gray-600 font-semibold">Confirm New Password</label>
                                <input
                                    type="password"
                                    name="confirm_new_password"
                                    value={passwordData.confirm_new_password}
                                    onChange={handlePasswordChange}
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleChangePassword}
                                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 mt-4"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Withdraw Password Modal */}
            {isWithdrawPasswordModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
                        <button
                            onClick={toggleWithdrawPasswordModal}
                            className="absolute top-4 right-4 text-green-600 font-bold text-lg"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Change Withdraw Password</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="text-gray-600 font-semibold">Old Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>
                            <div>
                                <label className="text-gray-600 font-semibold">New Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>
                            <div>
                                <label className="text-gray-600 font-semibold">Confirm New Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={toggleWithdrawPasswordModal}
                                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-500 mt-4"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PersonalInfo;
