import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../motion";
import { GoArrowLeft } from "react-icons/go";

const Withdraw = () => {
    const [activeTab, setActiveTab] = useState("withdraw");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <motion.div
            initial={fadeIn("right", null).initial}
            whileInView={fadeIn("right", 1 * 2).animate}
            className="max-w-full mx-auto md:mt-8 md:p-6 p-2 bg-white rounded-lg"
        >
            {/* Back Button */}
            <div className="flex items-center mb-6">
                <button onClick={() => window.history.back()} className="text-lg text-red-600">
                    <GoArrowLeft />
                </button>
                <h2 className="text-xl font-bold text-gray-800 ml-4">Back</h2>
            </div>

            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Withdraw</h1>

            {/* Tabs for Withdraw Now and Withdraw History */}
            <div className="flex space-x-4 mb-6 border-b">
                <button
                    onClick={() => handleTabChange("withdraw")}
                    className={`pb-2 border-b-2 ${activeTab === "withdraw" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
                        } focus:outline-none`}
                >
                    Withdraw Now
                </button>
                <button
                    onClick={() => handleTabChange("history")}
                    className={`pb-2 border-b-2 ${activeTab === "history" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
                        } focus:outline-none`}
                >
                    Withdraw History
                </button>
            </div>

            {/* Withdraw Now Content */}
            {activeTab === "withdraw" && (
                <motion.div
                    key="withdraw"
                    initial={slideIn("right", null).initial}
                    animate={slideIn("right", 1 * 2).animate}
                >
                    {/* Balance Section */}
                    <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
                        <p className="font-semibold text-sm">Total Balance</p>
                        <p className="text-3xl font-bold">USD 101.53</p>
                        {/* <p className="text-sm mt-2">You will receive your withdrawal within an hour</p> */}
                    </div>

                    {/* Input Fields */}
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                            Withdrawal Amount
                        </label>
                        <input
                            type="text"
                            id="amount"
                            placeholder="Enter amount"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Withdrawal Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200">
                        Submit
                    </button>
                </motion.div>
            )}

            {/* Withdraw History Content */}
            {activeTab === "history" && (
                <motion.div
                    key="history"
                    initial={slideIn("left", null).initial}
                    animate={slideIn("left", 1 * 2).animate}
                    exit={{ opacity: 0, x: 50 }}
                    className="text-gray-500 text-center mt-6"
                >
                    <p>No history available</p>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Withdraw;
