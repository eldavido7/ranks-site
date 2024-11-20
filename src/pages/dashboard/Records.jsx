import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion";
import BottomNavMobile from "./components/BottomNavMobile";
import { GoArrowLeft } from "react-icons/go";

const recordsData = [
    {
        date: "2024-11-14 08:06:27",
        productName: "Kitchen Toaster",
        productImage: "https://images.pexels.com/photos/3965532/pexels-photo-3965532.jpeg?auto=compress&cs=tinysrgb&w=200",
        score: 5,
        totalAmount: "USD 39",
        commission: "USD 2.38",
        status: "Completed",
    },
    {
        date: "2024-11-14 08:06:27",
        productName: "Knife Set",
        productImage: "https://images.pexels.com/photos/3965532/pexels-photo-3965532.jpeg?auto=compress&cs=tinysrgb&w=200",
        score: 5,
        totalAmount: "USD 65",
        commission: "USD 3.97",
        status: "Completed",
    },
    {
        date: "2024-11-14 08:06:27",
        productName: "Coffee Maker",
        productImage: "https://images.pexels.com/photos/3965532/pexels-photo-3965532.jpeg?auto=compress&cs=tinysrgb&w=200",
        score: 4,
        totalAmount: "USD 80",
        commission: "USD 5.00",
        status: "Pending",
    },
    {
        date: "2024-11-14 08:06:27",
        productName: "Vacuum Cleaner",
        productImage: "https://images.pexels.com/photos/3965532/pexels-photo-3965532.jpeg?auto=compress&cs=tinysrgb&w=200",
        score: 4,
        totalAmount: "USD 120",
        commission: "USD 6.50",
        status: "Freeze",
    },
];

const statusColors = {
    Completed: "bg-red-100 text-red-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Freeze: "bg-blue-100 text-blue-600",
};

const Records = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredRecords = activeTab === "All" ? recordsData : recordsData.filter(record => record.status === activeTab);

    return (
        <div className="md:p-4 p-2 md:max-w-7xl mx-auto md:mb-2 mb-24">
            <div className="w-fit bg-gray-200 p-2 rounded-lg shadow-sm mb-6">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center text-lg text-red-600"
                >
                    <GoArrowLeft />
                    <h2 className="text-xl font-bold text-gray-800 ml-4">Back</h2>
                </button>

            </div>

            {/* Tabs */}
            <motion.div
                initial={fadeIn("right", null).initial}
                animate={fadeIn("right", 1 * 2).animate}
                className="flex justify-center space-x-4 md:space-x-8 mb-4 md:mb-6">
                {["All", "Pending", "Completed", "Freeze"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 pb-1 text-sm md:text-base ${activeTab === tab
                            ? "text-red-600 font-semibold border-b-2 border-red-600"
                            : "text-gray-600"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </motion.div>

            {/* Records List */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 md:space-y-6">
                {filteredRecords.map((record, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow-lg p-4 md:p-5 flex items-start space-x-4 md:space-x-6 relative"
                    >
                        {/* Status Badge */}
                        <div className="absolute top-2 right-2 md:top-4 md:right-4 flex items-center space-x-2">
                            <div className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[record.status]}`}>
                                {record.status}
                            </div>
                            {/* Submit Button for Pending Status */}
                            {record.status === "Pending" && (
                                <button className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-600 rounded-full">
                                    Submit
                                </button>
                            )}
                        </div>

                        {/* Product Image */}
                        <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                            <img
                                src={record.productImage}
                                alt={record.productName}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex-grow">
                            <p className="text-gray-500 text-xs md:text-sm mb-1">{record.date}</p>
                            <p className="text-md md:text-lg font-bold text-gray-800">{record.productName}</p>
                            <div className="flex items-center text-yellow-500 my-1">
                                <span className="text-xs md:text-sm mr-1">Score Ranking</span>
                                {Array(record.score)
                                    .fill()
                                    .map((_, i) => (
                                        <BsStarFill key={i} className="text-xs md:text-sm" />
                                    ))}
                            </div>

                            {/* Amounts */}
                            <div className="flex justify-between mt-2 md:mt-4">
                                <div>
                                    <p className="text-gray-500 text-xs md:text-sm">Total Amount</p>
                                    <p className="text-sm md:text-lg font-bold text-gray-800">{record.totalAmount}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs md:text-sm">Commission</p>
                                    <p className="text-sm md:text-lg font-bold text-red-600">{record.commission}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
            <BottomNavMobile className="md:hidden" />
        </div>
    );
};

export default Records;
