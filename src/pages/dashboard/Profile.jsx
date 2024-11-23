import { useEffect, useState } from "react";
import {
    BiUserCircle,
    BiUser,
    BiCopy,
    BiChevronRight,
    BiCreditCard,
    BiLogOutCircle,
} from "react-icons/bi";
import { GiCrown } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../motion";
import { toast } from "sonner";
import "react-toastify/dist/ReactToastify.css";
import BottomNavMobile from "./components/BottomNavMobile";
import authService from "../../app/service/auth.service"; // Import authService for fetching profile data
import { logout } from "../../app/slice/auth.slice";
import { login } from "../../constants/app.routes";
import { useDispatch } from "react-redux";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initialize dispatch

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await authService.fetchProfile();
                if (response.success) {
                    setProfile(response.data);
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

    const copyReferralCode = () => {
        if (profile?.referral_code) {
            navigator.clipboard.writeText(profile.referral_code);
            toast.success("Referral code copied!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const handleLogout = () => {
        authService.logout(); // Clear tokens and state
        dispatch(logout()); // Dispatch the logout action
        navigate(login);
    };

    return (
        <div className="bg-white md:overflow-hidden">
            {/* Profile Card */}
            <motion.div
                initial={slideIn("down", null).initial}
                whileInView={slideIn("down", 1 * 2).animate}
                className="bg-red-600 rounded-2xl md:mx-4 md:my-6 mx-2 md:p-8 p-2 mt-2 text-white">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <BiUserCircle className="md:text-6xl text-4xl md:mr-6 mr-2" />
                        <div>
                            <p className="text-xl font-bold">
                                {profile?.username || "N/A"}
                            </p>
                            <div className="text-md">
                                Referral code:
                                <div className="flex flex-wrap items-center mt-1">
                                    <span className="font-bold">
                                        {profile?.referral_code || "N/A"}
                                    </span>
                                    <BiCopy
                                        onClick={copyReferralCode}
                                        className="ml-2 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <GiCrown className="text-5xl ml-6" />
                        <p className="font-bold text-sm mt-2 md:mr-0 mr-8">Crown (VIP8)</p>
                    </div>
                </div>
                <div className="border-t border-yellow-400 mt-2 md:mt-6 pt-4 grid grid-cols-2 gap-2 md:gap-6 sm:flex sm:justify-between text-md">
                    <div className="text-center">
                        <p>Wallet Balance:</p>
                        <p className="font-bold text-lg">
                            ${profile?.wallet?.balance || "0.00"}
                        </p>
                    </div>
                    <div className="text-center">
                        <p>On Hold Amount:</p>
                        <p className="text-yellow-400 font-bold text-lg">
                            ${profile?.wallet?.on_hold || "0.00"}
                        </p>
                    </div>
                    <div className="text-center">
                        <p>Commission:</p>
                        <p className="font-bold text-lg">
                            {profile?.wallet?.commission || "0.00"}
                        </p>
                    </div>
                    <div className="text-center">
                        <p>Credit Score:</p>
                        <p className="font-bold text-lg">
                            ${profile?.credit_score || "N/A"}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Profile Options */}
            <div className="space-y-4 md:mx-6 mx-2 md:mb-4 mb-52">
                {/* Financial Section */}
                <div className="bg-white rounded-lg shadow">
                    <motion.div
                        initial={fadeIn("right", null).initial}
                        whileInView={fadeIn("right", 1 * 2).animate}
                        onClick={() => navigate("/home/deposit")}
                        className="flex items-center cursor-pointer justify-between p-4 border-b">
                        <div className="flex items-center space-x-4">
                            <BiCreditCard className="text-red-600" />
                            <p className="text-gray-700 font-semibold">Deposit</p>
                        </div>
                        <BiChevronRight className="text-gray-400" />
                    </motion.div>
                    <motion.div
                        initial={fadeIn("right", null).initial}
                        whileInView={fadeIn("right", 2 * 2).animate}
                        onClick={() => navigate("/home/withdraw")}
                        className="flex items-center cursor-pointer justify-between p-4">
                        <div className="flex items-center space-x-4">
                            <BiCreditCard className="text-red-600" />
                            <p className="text-gray-700 font-semibold">Withdraw</p>
                        </div>
                        <BiChevronRight className="text-gray-400" />
                    </motion.div>
                </div>

                {/* Details Section */}
                <div className="bg-white rounded-lg shadow">
                    <motion.div
                        initial={fadeIn("right", null).initial}
                        whileInView={fadeIn("right", 3 * 2).animate}
                        onClick={() => navigate("/home/personal")}
                        className="flex items-center cursor-pointer justify-between p-4 border-b">
                        <div className="flex items-center space-x-4 ">
                            <BiUser className="text-red-600" />
                            <p className="text-gray-700 font-semibold">Personal Information</p>
                        </div>
                        <BiChevronRight className="text-gray-400" />
                    </motion.div>
                    <motion.div
                        initial={fadeIn("right", null).initial}
                        whileInView={fadeIn("right", 4 * 2).animate}
                        onClick={() => navigate("/home/payment")}
                        className="flex items-center cursor-pointer justify-between p-4">
                        <div className="flex items-center space-x-4">
                            <BiCreditCard className="text-red-600" />
                            <p className="text-gray-700 font-semibold">Payment Methods</p>
                        </div>
                        <BiChevronRight className="text-gray-400" />
                    </motion.div>
                </div>

                {/* Other Section */}
                <div className="bg-white rounded-lg shadow">
                    <motion.div
                        initial={fadeIn("right", null).initial}
                        whileInView={fadeIn("right", 5 * 2).animate}
                        onClick={() => navigate("/home/contact")}
                        className="flex items-center cursor-pointer justify-between p-4 border-b">
                        <div className="flex items-center space-x-4">
                            <BiUser className="text-red-600" />
                            <p className="text-gray-700 font-semibold">Contact Us</p>
                        </div>
                        <BiChevronRight className="text-gray-400" />
                    </motion.div>
                    <motion.div
                        initial={fadeIn("right", null).initial}
                        whileInView={fadeIn("right", 6 * 2).animate}
                        onClick={() => navigate("/home/notifications")}
                        className="flex items-center cursor-pointer justify-between p-4">
                        <div className="flex items-center space-x-4">
                            <BiUser className="text-red-600" />
                            <p className="text-gray-700 font-semibold">Notifications</p>
                        </div>
                        <BiChevronRight className="text-gray-400" />
                    </motion.div>
                </div>

                {/* Logout Button */}
                <motion.button
                    initial={fadeIn("right", null).initial}
                    whileInView={fadeIn("right", 7 * 2).animate}
                    onClick={handleLogout}
                    className="w-full bg-white text-red-600 md:mb-2 mb-52 border shadow font-semibold py-3 rounded-full flex items-center justify-center">
                    <BiLogOutCircle className="mr-2" /> Logout
                </motion.button>
            </div>
            <BottomNavMobile className="md:hidden" />
        </div>
    );
};

export default Profile;
