import { FiUsers } from "react-icons/fi";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { BsCalendar2Event } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { FaCcMastercard } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { MdRestartAlt } from "react-icons/md";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import videoSource from "../../assets/office-loop.mp4";
import { CiCreditCard1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { starting } from "../../constants/app.routes";

const Home = () => {

    const navigate = useNavigate();

    const [showWelcome, setShowWelcome] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [notifications, setNotifications] = useState(3);

    const toggleWelcome = () => {
        setShowWelcome(!showWelcome);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col relative">
            {/* Video Section */}
            <div className="relative w-full h-96 mt-2 overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>

            {/* Sliding Notification Bar */}
            <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="absolute top-[375px] left-[5%] bg-white text-black py-2 px-4 rounded-full shadow-md z-30 flex items-center justify-center"
                style={{ width: "90%", maxWidth: "90%", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative flex items-center">
                    <IoMdNotificationsOutline
                        className={`text-lg mr-1 ${notifications > 0 ? "shake" : ""}`}
                    />
                    {notifications > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                            {notifications}
                        </span>
                    )}
                </div>
                <marquee direction="">
                    Welcome to Adsterra! We collaborate with you to drive better exposure and
                    create proven value with Adsterra platform strategy and product solutions.
                </marquee>
            </motion.div>

            {/* Links Section with Red Background */}
            <div className="bg-red-600 py-8">
                <div className="container mx-auto grid grid-cols-4 md:flex justify-around md:flex-wrap gap-4 px-4">
                    {[
                        { label: "Starting", icon: MdRestartAlt, route: (starting) },
                        { label: "Cert", icon: TbCertificate },
                        { label: "Withdraw", icon: FaCcMastercard },
                        { label: "Deposit", icon: CiCreditCard1 },
                        { label: "T & C", icon: BiBook },
                        { label: "Events", icon: BsCalendar2Event },
                        { label: "FAQ", icon: RiQuestionAnswerLine },
                        { label: "About Us", icon: FiUsers },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => item.route && navigate(item.route)}
                            className="bg-white rounded-lg shadow-lg p-3 md:w-[120px] md:h-[80px] text-center flex flex-col items-center justify-center"
                        >
                            <item.icon className="text-2xl text-red-600 mb-1" />
                            <p className="text-xs font-semibold text-gray-700">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Sliding Welcome Banner within Inner Window */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: showWelcome ? 0 : -10 }}
                transition={{ duration: 0.5 }}
                className="fixed bottom-4 left-4 md:left-80 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center cursor-pointer z-10"
                onClick={toggleWelcome}
                style={{
                    width: showWelcome ? 'auto' : '40px',
                    padding: showWelcome ? '12px' : '8px',
                }}
            >
                {showWelcome ? (
                    <>
                        <FaUserCircle className="mr-2" />
                        <div>
                            <p className="text-lg font-bold">Hi, tester 👋</p>
                            <p>Welcome Back</p>
                        </div>
                        <MdChevronLeft className="ml-2 text-2xl" />
                    </>
                ) : (
                    <MdChevronRight className="text-2xl" />
                )}
            </motion.div>

            {/* VIP Levels Section */}
            <div className="container mx-auto mt-8 px-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">VIP Levels</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { level: "Beginner", icon: "🌟", amount: "100 USD", rate: "0.5%", tasks: 35 },
                        { level: "Bronze", icon: "🥉", amount: "500 USD", rate: "1.2%", tasks: 40 },
                        { level: "Silver (VIP 1)", icon: "🥈", amount: "1500 USD", rate: "1.3%", tasks: 45 },
                        { level: "Gold (VIP 2)", icon: "🥇", amount: "8500 USD", rate: "1.6%", tasks: 50 },
                        { level: "Platinum (VIP 3)", icon: "💎", amount: "10500 USD", rate: "2.1%", tasks: 55 },
                        { level: "Emerald (VIP 4)", icon: "💠", amount: "13500 USD", rate: "2.5%", tasks: 60 },
                        { level: "Diamond (VIP 5)", icon: "🔷", amount: "15500 USD", rate: "3.9%", tasks: 65 },
                        { level: "Masters (VIP 6)", icon: "🏆", amount: "30000 USD", rate: "5.1%", tasks: 65 },
                    ].map((vip, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-5 rounded-lg shadow-lg flex flex-col justify-center items-center h-44 md:h-40 relative"
                        >
                            {/* Icon and Price positioned at the top for mobile */}
                            <div className="flex justify-between w-full items-center mb-2">
                                <span className="text-2xl">{vip.icon}</span>
                                <span className="text-gray-500 text-sm">{vip.amount}</span>
                            </div>

                            {/* Centered Title */}
                            <h3 className="font-semibold text-gray-800 text-lg text-center mb-4">
                                {vip.level}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm text-center">
                                Commission rate {vip.rate}, {vip.tasks} tasks/day.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Home;

