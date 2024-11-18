import { FaHeadset, FaWhatsapp, FaTelegramPlane, FaCommentDots } from "react-icons/fa";
import logo from "../../assets/logo-light.png"
import { GoArrowLeft } from "react-icons/go";

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 text-gray-800">
            <button onClick={() => window.history.back()} className="flex items-center mb-6 text-lg text-red-600">
                <GoArrowLeft />
                <h2 className="text-xl font-bold text-gray-800 ml-4">Back</h2>
            </button>
            {/* Logo and Heading */}
            <div className="text-center mb-10">
                <div className="flex flex-col items-center">
                    <img src={logo} alt="Adsterra Logo" className="w-24 mb-4" /> {/* Update with correct logo path */}
                    <FaHeadset className="text-6xl text-gray-300 mb-4" />
                </div>
                <h1 className="text-2xl font-bold text-gray-700">Welcome to Customer Service</h1>
                <p className="text-gray-600 mt-2">Were here to help you 24/7 with any inquiries or issues.</p>
            </div>

            {/* Chat Options */}
            <div className="bg-white p-8 rounded-lg shadow-md w-80 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Choose a Support Option</h2>
                <div className="space-y-4">
                    <button className="w-full bg-red-500 text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-red-600 transition duration-200">
                        <FaCommentDots />
                        Online Chat
                    </button>
                    <button className="w-full bg-green-500 text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-green-600 transition duration-200">
                        <FaWhatsapp />
                        WhatsApp Chat
                    </button>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition duration-200">
                        <FaTelegramPlane />
                        Telegram Chat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
