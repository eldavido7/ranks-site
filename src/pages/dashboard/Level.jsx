import { GiRingmaster } from "react-icons/gi";
import { motion } from "framer-motion";
import { GiCrown } from "react-icons/gi";
import BottomNavMobile from "./components/BottomNavMobile";
import { GoArrowLeft } from "react-icons/go";

const levelsData = [
    {
        name: "Beginner Level",
        icon: "🌟",
        amount: "USD 100",
        description: "Deposit 100 USD. Earn 0.5% profit per submitted mission; bulk missions can earn 5X profit. 3 sets of 35 missions per day. 2 withdrawals per day.",
    },
    {
        name: "Bronze",
        icon: "🥉",
        amount: "USD 500",
        description: "Deposit 1500 USD. Earn 1.2% profit per mission; bulk missions can earn 4X profit. 3 sets of 40 missions per day. 2 withdrawals per day.",
    },
    {
        name: "Silver (VIP1)",
        icon: "🥈",
        amount: "USD 1500",
        description: "Deposit 5500 USD. Earn 1.3% profit per submitted mission; bulk missions can earn 5X profit. 3 sets of 45 missions per day. 3 withdrawals per day.",
    },
    {
        name: "Gold (VIP2)",
        icon: "🥇",
        amount: "USD 8500",
        description: "Deposit 8500 USD and receive an additional bonus of 850 USD. Earn 1.6% profit per submitted mission; grouped missions can earn 7X profit. 4 sets of 50 missions per day. 4 withdrawals per day.",
    },
    {
        name: "Platinum (VIP3)",
        icon: "💎",
        amount: "USD 10500",
        description: "Deposit 10500 USD and get a bonus of 1,050 USD. Earn 2.1% profit per mission submitted; grouped missions can earn 8X profit. 5 sets of 55 missions per day. 5 withdrawals per day.",
    },
    {
        name: "Emerald (VIP4)",
        icon: "💠",
        amount: "USD 13500",
        description: "Deposit 13500 USD and get a bonus of 1,350 USD. Earn 2.5% profit per mission submitted; grouped missions can earn 10X profit. 4 sets of 60 missions per day. 6 withdrawals per day.",
    },
    {
        name: "Diamond (VIP5)",
        icon: "🔷",
        amount: "USD 15500",
        description: "Deposit 15500 USD and get a bonus of 1,550 USD. Earn 3.9% profit per mission submitted; grouped missions can earn 12X profit. 4 sets of 65 missions per day. 7 withdrawals per day.",
    },
    {
        name: "Masters (VIP6)",
        icon: "🏆",
        amount: "USD 30000",
        description: "Deposit 15.74 ETH (Ethereum) and get a bonus of 5,550 USD. Earn 5.1% profit per mission submitted; grouped missions can earn 13X profit. 4 sets of 70 missions per day. 7 withdrawals per day.",
    },
    {
        name: "GrandMasters (VIP7)",
        icon: <GiRingmaster className="text-indigo-400 text-3xl" />,
        amount: "USD 65500",
        description: "Deposit 1.2 BTC (Bitcoin) and get a bonus of 8,105 USD. Earn 5.5% profit per mission submitted; grouped missions can earn 15X profit. 5 sets of 75 missions per day. 8 withdrawals per day.",
    },
    {
        name: "Crown (VIP8)",
        icon: <GiCrown className="text-yellow-400 text-3xl" />,
        amount: "USD 155500",
        description: "Deposit 4079.14 LTC (Litecoin) and get an extra 30,000 USD bonus. Earn 6.1% profit per mission submitted; grouped missions can earn 15X profit. 5 sets of 80 missions per day. 10 withdrawals per day.",
    },
];

const Level = () => {
    return (
        <div className="min-h-screen bg-white p-2 md:p-8">
            <div className="w-fit bg-gray-200 p-2 rounded-lg shadow-sm mb-6">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center text-lg text-red-600"
                >
                    <GoArrowLeft />
                    <h2 className="text-xl font-bold text-gray-800 ml-4">Back</h2>
                </button>
            </div>

            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">VIP Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mb-1 mb-52">
                {levelsData.map((level, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex-shrink-0">
                            {level.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{level.name}</h3>
                            <p className="text-red-500 font-bold mb-2">{level.amount}</p>
                            <p className="text-gray-600 text-sm">{level.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <BottomNavMobile className="md:hidden" />
        </div>
    );
};

export default Level;
