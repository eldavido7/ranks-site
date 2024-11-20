import { BsArrowRightShort } from "react-icons/bs";
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
import { Link, useNavigate } from "react-router-dom";
import { about, certificate, deposit, events, faq, notifications, starting, terms, withdraw } from "../../constants/app.routes";
import BottomNavMobile from "./components/BottomNavMobile";

const Home = () => {

    const navigate = useNavigate();

    const [showWelcome, setShowWelcome] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [Notifications, setNotifications] = useState(3);

    const toggleWelcome = () => {
        setShowWelcome(!showWelcome);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col relative">
            {/* Video Section */}
            <div className="relative w-full h-96 md:mt-0 mt-2 overflow-hidden">
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
                <Link to={notifications}>
                    <div className="relative flex items-center">
                        <IoMdNotificationsOutline
                            className={`text-lg mr-1 ${Notifications > 0 ? "shake" : ""}`}
                        />
                        {Notifications > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                                {Notifications}
                            </span>
                        )}
                    </div>
                </Link>
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
                        { label: "Cert", icon: TbCertificate, route: (certificate) },
                        { label: "Withdraw", icon: FaCcMastercard, route: (withdraw) },
                        { label: "Deposit", icon: CiCreditCard1, route: (deposit) },
                        { label: "T & C", icon: BiBook, route: (terms) },
                        { label: "Events", icon: BsCalendar2Event, route: (events) },
                        { label: "FAQ", icon: RiQuestionAnswerLine, route: (faq) },
                        { label: "About Us", icon: FiUsers, route: (about) },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => item.route && navigate(item.route)}
                            className="bg-white cursor-pointer rounded-lg shadow-lg p-3 md:w-[120px] md:h-[80px] text-center flex flex-col items-center justify-center"
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
                className="fixed bottom-24 left-4 md:left-80 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center cursor-pointer z-10 md:bottom-4" // Adjust the bottom position for mobile
                onClick={toggleWelcome}
                style={{
                    width: showWelcome ? 'auto' : '10px',
                    padding: showWelcome ? '12px' : '8px',
                    height: showWelcome ? 'auto' : '70px',
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
            <div className="container mx-auto mt-8 px-2 md:mb-2 mb-52">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">VIP Levels</h2>
                    <button
                        onClick={() => navigate("/home/level")}
                        className="font-semibold rounded-full border p-2 flex items-center">
                        View More
                        <BsArrowRightShort className="text-2xl text-red-600" />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { level: "Beginner", icon: "🌟", amount: "$100", rate: "0.5%", tasks: 35 },
                        { level: "Bronze", icon: "🥉", amount: "$500", rate: "1.2%", tasks: 40 },
                        { level: "Silver (VIP 1)", icon: "🥈", amount: "$1500", rate: "1.3%", tasks: 45 },
                        { level: "Gold (VIP 2)", icon: "🥇", amount: "$8500", rate: "1.6%", tasks: 50 },
                        { level: "Platinum (VIP 3)", icon: "💎", amount: "$10500", rate: "2.1%", tasks: 55 },
                        { level: "Emerald (VIP 4)", icon: "💠", amount: "$13500", rate: "2.5%", tasks: 60 },
                        { level: "Diamond (VIP 5)", icon: "🔷", amount: "$20000", tasks: 65 },
                        { level: "Masters (VIP 6)", icon: "🏆", amount: "$30000", rate: "5.1%", tasks: 65 },
                    ].map((vip, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => navigate("/home/level")}
                            className="bg-white p-5 rounded-lg cursor-pointer shadow-lg flex flex-col justify-center items-center h-auto md:h-40 relative"
                        >
                            {/* Icon and Price positioned at the top for mobile */}
                            <div className="flex justify-between w-full items-center mb-2">
                                <span className="text-2xl">{vip.icon}</span>
                                <span className="text-white rounded-lg p-2 border text-center bg-red-600 w-[88px] h-8 text-xs">{vip.amount}</span>
                            </div>

                            {/* Centered Title */}
                            <h3 className="font-semibold text-gray-800 md:text-lg text-[15px] text-center mb-4">
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
            <BottomNavMobile className="md:hidden" />
        </div>
    );
};

export default Home;

