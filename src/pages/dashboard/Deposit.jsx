import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../motion";

const Deposit = () => {
    const [activeTab, setActiveTab] = useState("deposit");
    const [amount, setAmount] = useState("");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handlePresetAmount = (value) => {
        setAmount(value.toString());
    };

    return (
        <motion.div
            initial={fadeIn("right", null).initial}
            whileInView={fadeIn("right", 1 * 2).animate}
            className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg"
        >
            {/* Back Button */}
            <button
                onClick={() => window.history.back()}
                className="text-gray-500 hover:text-gray-700 mb-4 inline-flex items-center"
            >
                <BiArrowBack className="mr-2" /> Back
            </button>

            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Deposit</h1>

            {/* Tabs for Deposit Now and Deposit History */}
            <div className="flex space-x-4 mb-6 border-b">
                <button
                    onClick={() => handleTabChange("deposit")}
                    className={`pb-2 border-b-2 ${activeTab === "deposit" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
                        } focus:outline-none`}
                >
                    Deposit Now
                </button>
                <button
                    onClick={() => handleTabChange("history")}
                    className={`pb-2 border-b-2 ${activeTab === "history" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
                        } focus:outline-none`}
                >
                    Deposit History
                </button>
            </div>

            {activeTab === "deposit" && (
                <motion.div
                    key="deposit"
                    initial={slideIn("right", null).initial}
                    whileInView={slideIn("right", 1 * 2).animate}
                >
                    {/* Balance Section */}
                    <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
                        <p className="font-semibold text-sm">Total Balance</p>
                        <p className="text-3xl font-bold">USD 1123.66</p>
                    </div>

                    {/* Preset Amount Buttons */}
                    <div className="flex justify-between mb-6 gap-3">
                        <button
                            onClick={() => handlePresetAmount(100)}
                            className="bg-white border border-gray-300 rounded-lg p-4 w-full shadow text-gray-700 font-semibold hover:bg-gray-100 transition"
                        >
                            USD <br /> 100.00
                        </button>
                        <button
                            onClick={() => handlePresetAmount(200)}
                            className="bg-white border border-gray-300 rounded-lg p-4 w-full shadow text-gray-700 font-semibold hover:bg-gray-100 transition"
                        >
                            USD <br /> 200.00
                        </button>
                        <button
                            onClick={() => handlePresetAmount(500)}
                            className="bg-white border border-gray-300 rounded-lg p-4 w-full shadow text-gray-700 font-semibold hover:bg-gray-100 transition"
                        >
                            USD <br /> 500.00
                        </button>
                    </div>

                    {/* Input Field for Custom Deposit Amount */}
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                            Deposit Amount
                        </label>
                        <input
                            type="text"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200">
                        Submit
                    </button>
                </motion.div>
            )}

            {activeTab === "history" && (
                <motion.div
                    key="history"
                    initial={slideIn("left", null).initial}
                    whileInView={slideIn("left", 1 * 2).animate}
                    className="space-y-4"
                >
                    {[
                        { id: 1, date: "11-11-2024 19:45:49", status: "Confirmed", amount: 700 },
                        { id: 2, date: "11-11-2024 19:44:17", status: "Confirmed", amount: 100 },
                        { id: 3, date: "07-11-2024 13:00:35", status: "Confirmed", amount: 500 },
                    ].map((transaction) => (
                        <div
                            key={transaction.id}
                            className="flex items-center justify-between p-4 bg-white rounded-lg shadow border border-gray-200"
                        >
                            <div>
                                <p className="font-semibold text-gray-700">Deposit</p>
                                <p className="text-sm text-gray-500">{transaction.date}</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-1">
                                    {transaction.status}
                                </span>
                                <p className="text-gray-700 font-bold">{transaction.amount} USD</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

export default Deposit;
