import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { GiCrown } from "react-icons/gi";
import { motion } from "framer-motion";
import { slideIn } from "../../motion";

const slideVariants = {
    enter: (direction) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

const Starting = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        'https://adsterra-ranks.site//assets/img/01-min.jpg',
        'https://adsterra-ranks.site//assets/img/02-min.jpg',
        'https://adsterra-ranks.site//assets/img/03-min.jpg',
    ];

    const handleNextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const handlePrevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="min-h-screen flex flex-col items-center">
            {/* Greeting and Wallet Information Section */}
            <div className="w-full  mx-auto mt-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <BiUser className="text-3xl text-red-500 mr-2" />
                        <p className="font-bold text-lg">Hi, Tester 👋</p>
                    </div>
                    <GiCrown className="text-4xl text-yellow-500" />
                </div>

                {/* Wallet Information Cards */}
                <motion.div
                    initial={slideIn("up", null).initial}
                    whileInView={slideIn("up", 1 * 2).animate}
                    className="grid grid-cols-2 gap-4 mt-4">
                    {[{ label: "Wallet Balance", amount: "1123.66 USD", description: "Profits will be added here" },
                    { label: "Today's Profit", amount: "183.64 USD", description: "Profit Earned" },
                    { label: "On Hold", amount: "-3226.34 USD", description: "Will be added to your balance" },
                    { label: "Salary", amount: "0 USD", description: "Today's Salary" }].map((item, idx) => (
                        <div key={idx} className="p-4 bg-gray-50 rounded-lg shadow-md">
                            <p className="font-bold text-gray-700">{item.label}</p>
                            <p className="text-sm text-gray-500">{item.description}</p>
                            <p className="text-red-500 font-bold text-lg mt-2">{item.amount}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Start Optimization Carousel */}
            <div className="w-full  mx-auto mt-8 bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Start Optimization</h2>
                    <p className="text-red-500 text-xl font-semibold">29/80</p>
                </div>
                <div className="relative">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full rounded-lg" />
                    </motion.div>
                    <button
                        onClick={handlePrevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                    >
                        ❮
                    </button>
                    <button
                        onClick={handleNextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                    >
                        ❯
                    </button>
                </div>
                <motion.button
                    initial={slideIn("left", null).initial}
                    whileInView={slideIn("left", 1 * 2).animate}
                    onClick={toggleModal}
                    className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg w-full text-center"
                >
                    Starting
                </motion.button>
            </div>

            {/* Important Hint Section */}
            <div className="w-full  mx-auto mt-4 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-lg font-bold">Important Hint</h2>
                <ul className="list-disc ml-4 mt-2 text-gray-600">
                    <li>Working hours: 10:00:00 - 23:00:00</li>
                    <li>For inquiries about applicants, please consult agency services</li>
                </ul>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 300 }}
                        className="bg-white p-4 sm:p-8 rounded-3xl shadow-lg max-w-2xl w-full relative overflow-y-auto"
                        style={{ maxHeight: '90vh' }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-red-500 text-xl font-bold"
                        >
                            ✕
                        </button>

                        {/* Modal Title */}
                        <h2 className="text-2xl font-bold text-center mb-4 sm:mb-6">Task Submission</h2>

                        {/* Product Images and Details */}
                        <div className="flex items-start sm:space-x-6 mb-4">
                            {/* Product Images */}
                            <div className="flex space-x-2 sm:space-x-4 overflow-x-auto w-1/2 sm:w-auto">
                                <img
                                    src="https://adsterra-ranks.site//assets/img/01-min.jpg"
                                    alt="Product 1"
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                                <img
                                    src="https://adsterra-ranks.site//assets/img/02-min.jpg"
                                    alt="Product 2"
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                                <img
                                    src="https://adsterra-ranks.site//assets/img/03-min.jpg"
                                    alt="Product 3"
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="text-right flex-grow md:w-1/2 w-auto">
                                <p className="text-sm sm:text-lg font-semibold">Product 647</p>
                                <p className="text-sm sm:text-lg font-semibold">Product 897</p>
                                <p className="text-sm sm:text-lg font-semibold">Product 807</p>
                                <p className="text-sm sm:text-lg text-red-500 font-bold mt-1 sm:mt-2">USD 4350</p>
                                <p className="text-gray-500 text-xs sm:text-sm mt-1">Score Ranking</p>
                                <div className="flex justify-end mt-1 text-gray-400 text-sm sm:text-xl">
                                    <span>☆ ☆ ☆ ☆ ☆</span>
                                </div>
                            </div>
                        </div>

                        {/* Amount and Commission Section */}
                        <div className="flex justify-between border-t border-b py-2 sm:py-4 mb-4 text-center">
                            <div>
                                <p className="text-sm sm:text-lg font-semibold text-gray-500">Total amount</p>
                                <p className="text-red-500 font-bold text-sm sm:text-lg">USD 4350</p>
                            </div>
                            <div>
                                <p className="text-sm sm:text-lg font-semibold text-gray-500">Commission</p>
                                <p className="text-red-500 font-bold text-sm sm:text-lg">USD 652.5</p>
                            </div>
                        </div>

                        {/* Creation Time and Rating No */}
                        <div className="flex justify-between text-sm sm:text-lg text-gray-600 mb-2 sm:mb-4">
                            <p>Creation time</p>
                            <p>2024-11-13 05:01:47</p>
                        </div>
                        <div className="flex justify-between text-sm sm:text-lg text-gray-600 mb-4 sm:mb-6">
                            <p>Rating No</p>
                            <p className="text-red-500">1731502907</p>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={toggleModal}
                            className="w-full bg-red-500 text-white font-semibold py-2 sm:py-3 rounded-full"
                        >
                            Submit
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Starting;
