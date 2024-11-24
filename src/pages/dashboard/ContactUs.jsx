import { FaHeadset, FaWhatsapp, FaTelegramPlane, FaCommentDots } from "react-icons/fa";
import logo from "../../assets/logo-light.png";
import { GoArrowLeft } from "react-icons/go";
import { useSelector } from "react-redux";

const ContactUs = () => {
    const profile = useSelector((state) => state.auth.user);

    const handleNavigation = (url) => {
        if (url) {
            window.open(url, "_blank");
        } else {
            console.error("URL not provided or invalid");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10 md:2 mb-52 text-gray-800">
            {/* Back Button */}
            <div className="w-full">
                <div className="w-fit bg-gray-200 p-2 rounded-lg shadow-sm mb-6">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center text-lg text-red-600"
                    >
                        <GoArrowLeft />
                        <h2 className="text-xl font-bold text-gray-800 ml-4">Back</h2>
                    </button>
                </div>
            </div>

            {/* Logo and Heading */}
            <div className="text-center mb-10">
                <div className="flex flex-col items-center">
                    <img src={logo} alt="Adsterra Logo" className="w-24 mb-4" />
                    <FaHeadset className="text-6xl text-gray-300 mb-4" />
                </div>
                <h1 className="text-2xl font-bold text-gray-700">Welcome to Customer Service</h1>
                <p className="text-gray-600 mt-2">
                    We&apos;re here to provide you with all your services, needs, and inquiries or issues 24/7.
                </p>
            </div>

            {/* Chat Options */}
            <div className="bg-white p-8 rounded-lg shadow-md w-80 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Choose a Support Option</h2>
                <div className="space-y-4">
                    <button
                        onClick={() => handleNavigation(profile?.settings?.online_chat_url)}
                        className="w-full bg-red-500 text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-red-600 transition duration-200"
                    >
                        <FaCommentDots />
                        Online Chat
                    </button>
                    <button
                        onClick={() => handleNavigation(`https://wa.me/${profile?.settings?.whatsapp_contact?.replace(/[^\d]/g, "")}`)}
                        className="w-full bg-green-500 text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-green-600 transition duration-200"
                    >
                        <FaWhatsapp />
                        WhatsApp Chat
                    </button>
                    <button
                        onClick={() => handleNavigation(`https://t.me/${profile?.settings?.telegram_username?.replace("@", "")}`)}
                        className="w-full bg-blue-500 text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition duration-200"
                    >
                        <FaTelegramPlane />
                        Telegram Chat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
