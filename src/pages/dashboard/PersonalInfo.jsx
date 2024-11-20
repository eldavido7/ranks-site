import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

const PersonalInfo = () => {
    const [userName, setUserName] = useState("tester");
    const [phone, setPhone] = useState("09488584855");
    const [gender, setGender] = useState("male");

    const [isLoginPasswordModalOpen, setIsLoginPasswordModalOpen] = useState(false);
    const [isWithdrawPasswordModalOpen, setIsWithdrawPasswordModalOpen] = useState(false);

    const toggleLoginPasswordModal = () => setIsLoginPasswordModalOpen(!isLoginPasswordModalOpen);
    const toggleWithdrawPasswordModal = () => setIsWithdrawPasswordModalOpen(!isWithdrawPasswordModalOpen);

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set the base64 string for preview
            };
            reader.readAsDataURL(file); // Convert the file to a base64 string
        }
    };

    return (
        <div className="bg-gray-50 md:p-6 p-2">
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
                        {/* Image Preview */}
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Profile Preview"
                                className="w-16 h-16 rounded-full object-cover border"
                            />
                        )}
                        {/* File Input */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">User Name</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Phone</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Gender</label>
                    <input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
            </div>

            {/* Buttons Section */}
            <div className="md:space-x-4 md:space-y-0 md:flex grid space-y-4">
                <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-500">
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
                        {/* Close Button */}
                        <button
                            onClick={toggleLoginPasswordModal}
                            className="absolute top-4 right-4 text-blue-600 font-bold text-lg"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Change Login Password</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="text-gray-600 font-semibold">Old Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <label className="text-gray-600 font-semibold">New Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <label className="text-gray-600 font-semibold">Confirm New Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={toggleLoginPasswordModal}
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
                        {/* Close Button */}
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
