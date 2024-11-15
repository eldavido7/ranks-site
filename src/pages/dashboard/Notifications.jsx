import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";

const Notification = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            message: "Your today’s salary has been updated, old salary 0, new salary 100",
            date: "2 days ago",
            read: true,
        },
        {
            id: 2,
            message: "Your deposit of 700 USD has been validated. New Balance: 907.02",
            date: "2 days ago",
            read: true,
        },
        {
            id: 3,
            message: "Your deposit of 100 USD has been validated. New Balance: 207.02",
            date: "2 days ago",
            read: false,
        },
        {
            id: 4,
            message: "Your balance has been updated old balance 155560, new balance 100",
            date: "6 days ago",
            read: false,
        },
    ]);

    const markAsRead = (id) => {
        setNotifications(
            notifications.map((notif) =>
                notif.id === id ? { ...notif, read: true } : notif
            )
        );
    };

    return (
        <div className="p-6">
            <div className="flex items-center mb-6">
                <button onClick={() => window.history.back()} className="text-lg text-red-600">
                    <GoArrowLeft />
                </button>
                <h2 className="text-xl font-bold text-gray-800 ml-4">Notifications</h2>
            </div>

            <p className="text-gray-700 mb-4">{notifications.length} Notification(s)</p>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.7 }}
                className="space-y-4">
                {notifications.map((notif) => (
                    <div
                        key={notif.id}
                        className={`bg-white p-4 rounded-lg shadow flex flex-col md:flex-row justify-between items-start md:items-center ${!notif.read ? "border-l-4 border-red-600" : ""
                            }`}
                    >
                        <div className="flex-1">
                            <p className="text-gray-800 text-justify">{notif.message}</p>
                            <p className="text-gray-500 text-sm mt-1">{notif.date}</p>
                            {!notif.read && <p className="text-red-500 text-sm mt-1">Unread</p>}
                        </div>
                        {!notif.read && (
                            <button
                                onClick={() => markAsRead(notif.id)}
                                className="text-white bg-red-600 px-4 py-1 rounded-full font-semibold text-sm mt-3 md:mt-0 md:ml-4"
                            >
                                Mark as read
                            </button>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Notification;
