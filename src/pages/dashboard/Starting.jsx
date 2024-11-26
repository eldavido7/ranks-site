import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { GiCrown } from "react-icons/gi";
import { motion } from "framer-motion";
import { slideIn } from "../../motion";
import BottomNavMobile from "./components/BottomNavMobile";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../app/service/products.service";

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
    const dispatch = useDispatch();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStar, setSelectedStar] = useState(0);
    const [comments, setComments] = useState("");

    const profile = useSelector((state) => state.profile.user);

    const images = [
        "https://picsum.photos/id/101/150/150", // Random image 1
        "https://picsum.photos/id/102/150/150", // Random image 2
        "https://picsum.photos/id/103/150/150", // Random image 3
        "https://picsum.photos/id/104/150/150", // Random image 4
        "https://picsum.photos/id/105/150/150", // Random image 5
        "https://picsum.photos/id/106/150/150", // Random image 6
        "https://picsum.photos/id/107/150/150", // Random image 7
        "https://picsum.photos/id/108/150/150", // Random image 8
        "https://picsum.photos/id/109/150/150", // Random image 9
        "https://picsum.photos/id/110/150/150", // Random image 10
        "https://picsum.photos/id/111/150/150", // Random image 11
        "https://picsum.photos/id/112/150/150", // Random image 12
        "https://picsum.photos/id/113/150/150", // Random image 13
        "https://picsum.photos/id/114/150/150", // Random image 14
        "https://picsum.photos/id/115/150/150", // Random image 15
        "https://picsum.photos/id/116/150/150", // Random image 16
        "https://picsum.photos/id/117/150/150", // Random image 17
        "https://picsum.photos/id/118/150/150", // Random image 18
        "https://picsum.photos/id/119/150/150", // Random image 19
        "https://picsum.photos/id/120/150/150", // Random image 20
    ];


    const products = useSelector((state) => state.products.products); // Access products from the Redux store

    useEffect(() => {
        const fetchProductsData = async () => {
            if (!products || products.length === 0) { // Only fetch if products are not already in the state
                await dispatch(fetchProducts()); // Use the fetchProducts function from the service
            }
        };

        fetchProductsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const groupImages = (images, groupSize) => {
        const grouped = [];
        for (let i = 0; i < images.length; i += groupSize) {
            grouped.push(images.slice(i, i + groupSize));
        }
        return grouped;
    };

    const groupedImages = groupImages(images, 10); // Group images into sets of 5
    const totalSlides = groupedImages.length;

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };


    const toggleModal = () => setIsModalOpen(!isModalOpen);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 3000); // Autoplay every 3 seconds

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide]);

    return (
        <div className="flex flex-col items-center">
            {/* Greeting and Wallet Information Section */}
            <div className="w-full mx-auto mt-4 bg-white rounded-lg shadow-lg p-4">
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
                    {[{
                        label: "Wallet Balance", amount: `$${profile?.wallet?.balance || "0.00"} USD`, description: "Profits will be added here"
                    },
                    { label: "Today's Profit", amount: `$${profile?.wallet?.commission || "0.00"} USD`, description: "Profit Earned" },
                    { label: "On Hold", amount: `$${profile?.wallet?.on_hold || "0.00"} USD`, description: "Will be added to your balance" },
                    { label: "Salary", amount: `$${profile?.wallet?.salary || "0.00"} USD`, description: "Today's Salary" }].map((item, idx) => (
                        <div key={idx} className="p-4 bg-gray-50 rounded-lg shadow-md">
                            <p className="font-bold text-lg text-gray-700">{item.label}</p>
                            <p className="text-sm text-gray-500">{item.description}</p>
                            <p className="text-red-500 font-bold text-lg mt-2">{item.amount}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Start Optimization Carousel */}
            <div className="w-full h-auto mx-auto mt-8 bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Start Optimization</h2>
                    <p className="text-red-500 text-xl font-semibold">
                        {currentSlide + 1} / {totalSlides}
                    </p>
                </div>
                <div className="relative flex justify-center items-center">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevSlide}
                        className="absolute left-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-full z-10"
                    >
                        ❮
                    </button>

                    {/* Carousel Content */}
                    <motion.div
                        key={currentSlide}
                        custom={currentSlide}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="grid gap-y-4"
                        style={{
                            gridTemplateColumns: "repeat(4, 1fr)",
                            justifyContent: "center",
                        }}
                    >
                        {/* Top Row: 4 Images */}
                        <div className="col-span-4 flex justify-around">
                            {groupedImages[currentSlide].slice(0, 4).map((img, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-center items-center border rounded-full mx-4 md:mx-10 bg-gray-500 p-0.5 h-[70px] md:w-[200px] md:h-[200px]"
                                >
                                    <img
                                        src={img}
                                        alt={`Image ${idx + 1}`}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Bottom Row: 3 Images */}
                        <div className="col-span-4 flex justify-center gap-4 mt-4">
                            {groupedImages[currentSlide].slice(4, 7).map((img, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-center items-center border rounded-full bg-gray-500 p-0.5 mx-4 md:mx-14 w-[70px] h-[70px] md:w-[200px] md:h-[200px]"
                                >
                                    <img
                                        src={img}
                                        alt={`Image ${idx + 5}`}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Next Button */}
                    <button
                        onClick={handleNextSlide}
                        className="absolute right-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-full z-10"
                    >
                        ❯
                    </button>
                </div>
                <button
                    onClick={toggleModal}
                    className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg w-full text-center"
                >
                    Starting
                </button>
            </div>


            {/* Important Hint Section */}
            <div className="w-full md:mb-2 mb-52 mx-auto mt-4 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-lg font-bold">Important Hint</h2>
                <ul className="list-disc ml-4 mt-2 text-gray-600">
                    <li>Working hours: {profile?.settings?.service_availability_start_time || "00:00"} - {profile?.settings?.service_availability_end_time || "23:00:00"}</li>
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
                            <div className="flex space-x-2 sm:space-x-4 overflow-x-auto w-full sm:w-auto">
                                {images.slice(0, 3).map((img, idx) => (
                                    <div key={idx} className="flex-shrink-0 w-[90px] md:w-[120px] h-auto">
                                        <img
                                            src={img}
                                            alt={`Product ${idx + 1}`}
                                            className="w-full h-auto object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>


                            {/* Product Details */}
                            <div className="text-right flex-grow md:w-1/4 w-auto">
                                <p className="text-sm sm:text-lg font-semibold">Product 647</p>
                                <p className="text-sm sm:text-lg font-semibold">Product 897</p>
                                <p className="text-sm sm:text-lg font-semibold">Product 807</p>
                                <p className="text-sm sm:text-lg text-red-500 font-bold mt-1 sm:mt-2">USD 4350</p>
                                <p className="text-gray-500 text-xs sm:text-sm mt-1">Star Rating</p>

                                {/* Stars Section */}
                                <div className="flex justify-end mt-1 text-gray-400 text-sm sm:text-xl space-x-1">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <span
                                            key={index}
                                            onClick={() => setSelectedStar(index + 1)}
                                            className={`cursor-pointer ${index < selectedStar ? "text-yellow-400" : "text-gray-400"
                                                }`}
                                        >
                                            ☆
                                        </span>
                                    ))}
                                </div>

                                {/* Comments Section */}
                                <textarea
                                    placeholder="Leave your comments here..."
                                    className="w-full mt-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                ></textarea>
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
            <BottomNavMobile className="md:hidden" />
        </div>
    );
};

export default Starting;
