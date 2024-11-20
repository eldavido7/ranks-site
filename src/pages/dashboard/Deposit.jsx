import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../motion";
import { GoArrowLeft } from "react-icons/go";
import { toast } from "react-toastify";

const Deposit = () => {
    const [activeTab, setActiveTab] = useState("deposit");
    const [amount, setAmount] = useState("");
    const [isDepositPage, setIsDepositPage] = useState(false); // State to toggle the new deposit page
    const [receipt, setReceipt] = useState(null); // State for uploaded file preview

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handlePresetAmount = (value) => {
        setAmount(value.toString());
    };

    const handleReceiptUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setReceipt(fileReader.result);
            };
            fileReader.readAsDataURL(file);
        }
    };

    const handleConfirmDeposit = () => {
        toast.success("Deposit confirmed successfully!");
        setIsDepositPage(false);
    };

    return (
        <motion.div
            initial={fadeIn("right", null).initial}
            whileInView={fadeIn("right", 1 * 2).animate}
            className="mx-w-full mx-auto md:p-6 p-2 bg-white rounded-lg"
        >
            {/* Back Button */}
            <div className="w-fit bg-gray-200 p-2 rounded-lg shadow-sm mb-6">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center text-lg text-red-600"
                >
                    <GoArrowLeft />
                    <h2 className="text-xl font-bold text-gray-800 ml-4">Back</h2>
                </button>
            </div>

            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Deposit</h1>

            {/* Render Deposit Confirmation Page */}
            {isDepositPage ? (
                <motion.div
                    key="deposit-confirmation"
                    initial={slideIn("right", null).initial}
                    whileInView={slideIn("right", 1 * 2).animate}
                >
                    {/* ETH/TRC20 Addresses */}
                    <div className="bg-red-600 text-white p-4 rounded-lg mb-4">
                        <p>
                            <span className="font-bold">ETH address:</span> 0x2835a3a46a193946b395d877a29dc3bc51bd49{" "}
                            <button className="text-sm text-blue-300 underline">Copy</button>
                        </p>
                        <p>
                            <span className="font-bold">TRC20 address:</span> TTXWm4XjoRXem2Ce1KeevUcBrzK2Whpv61{" "}
                            <button className="text-sm text-blue-300 underline">Copy</button>
                        </p>
                    </div>

                    {/* Deposit Amount */}
                    <div className="border p-4 rounded-lg text-center text-lg font-bold mb-4">
                        Deposit: {amount || "100 USD"}
                    </div>

                    {/* Upload Deposit Receipt */}
                    <div className="mb-6">
                        <label className="block text-gray-600 font-semibold mb-2">Deposit receipt</label>
                        {receipt && (
                            <img
                                src={receipt}
                                alt="Receipt Preview"
                                className="w-full max-h-64 mb-4 object-cover rounded-lg"
                            />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleReceiptUpload}
                            className="block w-full border p-2 rounded-lg"
                        />
                    </div>

                    {/* Confirm Button */}
                    <button
                        onClick={handleConfirmDeposit}
                        className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
                    >
                        Confirm Deposit
                    </button>
                </motion.div>
            ) : (
                <>
                    {/* Tabs for Deposit Now and Deposit History */}
                    <div className="flex space-x-4 mb-10 border-b">
                        <button
                            onClick={() => handleTabChange("deposit")}
                            className={`pb-2 border-b-2 ${activeTab === "deposit"
                                ? "border-blue-600 text-blue-600"
                                : "border-transparent text-gray-500"
                                } focus:outline-none`}
                        >
                            Deposit Now
                        </button>
                        <button
                            onClick={() => handleTabChange("history")}
                            className={`pb-2 border-b-2 ${activeTab === "history"
                                ? "border-blue-600 text-blue-600"
                                : "border-transparent text-gray-500"
                                } focus:outline-none`}
                        >
                            Deposit History
                        </button>
                    </div>

                    {/* Deposit Now Tab */}
                    {activeTab === "deposit" && (
                        <motion.div
                            key="deposit"
                            initial={slideIn("right", null).initial}
                            whileInView={slideIn("right", 1 * 2).animate}
                        >
                            {/* Balance Section */}
                            <div className="bg-red-600 text-white p-4 rounded-lg mb-10">
                                <p className="font-semibold text-sm">Total Balance</p>
                                <p className="text-3xl font-bold">USD 1123.66</p>
                            </div>

                            {/* Preset Amount Buttons */}
                            <div className="flex justify-between mb-10 gap-3">
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
                            <div className="mb-10">
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
                            <button
                                onClick={() => setIsDepositPage(true)}
                                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
                            >
                                Submit
                            </button>
                        </motion.div>
                    )}

                    {/* Deposit History Tab */}
                    {activeTab === "history" && (
                        <motion.div
                            key="history"
                            initial={slideIn("left", null).initial}
                            whileInView={slideIn("left", 1 * 2).animate}
                            className="space-y-4"
                        >
                            {[{ id: 1, date: "11 Dec 2024 19:45", status: "Confirmed", amount: 700 },
                            { id: 2, date: "11 Nov 2024 18:00", status: "Confirmed", amount: 100 },
                            { id: 3, date: "07 Nov 2024 13:00", status: "Confirmed", amount: 500 }]
                                .map((transaction) => (
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
                </>
            )}
        </motion.div>
    );
};

export default Deposit;
