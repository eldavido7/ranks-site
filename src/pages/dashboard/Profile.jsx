import { BiUser, BiCopy, BiChevronRight, BiCreditCard, BiLogOutCircle } from "react-icons/bi";
import { GiCrown } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomNavMobile from "./components/BottomNavMobile";

const Profile = () => {
    const navigate = useNavigate();

    const copyReferralCode = () => {
        navigator.clipboard.writeText("WPZYUC");
        toast.success("Referral code copied!", {
            position: "top-center",
            autoClose: 2000, // Closes automatically after 2 seconds
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className="bg-white overflow-hidden">
            <ToastContainer /> {/* Adjusted ToastContainer */}
            {/* Profile Card */}
            <motion.div
                initial={slideIn("down", null).initial}
                whileInView={slideIn("down", 1 * 2).animate}
                className="bg-red-600 rounded-2xl mx-6 my-4 p-6 text-white">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <BiUser className="md:text-5xl text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-bold">Tester</p>
                            <p className="text-sm">
                                Referral code: <span className="font-bold">WPZYUC</span>
                                <BiCopy onClick={copyReferralCode} className="inline ml-2 cursor-pointer" />
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <GiCrown className="text-4xl ml-4" />
                        <p className="font-bold text-xs mt-1">Crown (VIP8)</p>
                    </div>
                </div>
                <div className="border-t border-yellow-400 mt-4 pt-2 grid grid-cols-2 gap-4 sm:flex sm:justify-between text-sm">
                    <div className="text-center">
                        <p>Credit Score:</p>
                        <p className="font-bold">100%</p>
                    </div>
                    <div className="text-center">
                        <p>Wallet Balance:</p>
                        <p className="font-bold">$1123.66</p>
                    </div>
                    <div className="text-center">
                        <p>On Hold Amount:</p>
                        <p className="text-yellow-400 font-bold">-3226.34 USD</p>
                    </div>
                    <div className="text-center">
                        <p>Commission:</p>
                        <p className="font-bold">$183.64</p>
                    </div>
                </div>
            </motion.div>

            {/* Profile Options */}
            <div className="space-y-4 mx-6 mb-4">
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
                        onClick={() => navigate("/home/withdraw")} className="flex items-center cursor-pointer justify-between p-4">
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
                        onClick={() => navigate("/home/personal")} className="flex items-center cursor-pointer justify-between p-4 border-b">
                        <div className="flex items-center space-x-4 ">
                            <BiUser className="text-red-600" />
                            <p className="text-gray-700 font-semibold">Personal Information</p>
                        </div>
                        <BiChevronRight className="text-gray-400" />
                    </motion.div>
                    <motion.div
                        initial={fadeIn("right", null).initial}
                        whileInView={fadeIn("right", 4 * 2).animate}
                        onClick={() => navigate("/home/payment")} className="flex items-center cursor-pointer justify-between p-4">
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
                        onClick={() => navigate("/home/notifications")} className="flex items-center cursor-pointer justify-between p-4">
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
                    onClick={() => navigate("/")}
                    className="w-full bg-white text-red-600 border shadow font-semibold py-3 rounded-full flex items-center justify-center">
                    <BiLogOutCircle className="mr-2" /> Logout
                </motion.button>
            </div>
            <BottomNavMobile className="md:hidden" />
        </div>
    );
};

export default Profile;
