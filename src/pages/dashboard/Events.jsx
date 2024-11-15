import { useState } from "react";
import { motion } from "framer-motion";
import event1 from "../../assets/event1.png";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const images = [
    { src: event1, orientation: "landscape" },
    { src: event2, orientation: "portrait" },
    { src: event3, orientation: "portrait" },
];

const Events = () => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full md:max-w-7xl p-4 md:p-0 mx-auto my-8 overflow-hidden">
            <div className="flex items-center mb-6">
                <button onClick={() => window.history.back()} className="text-lg text-red-600">
                    <GoArrowLeft />
                </button>
                <h2 className="text-xl font-bold text-gray-800 ml-4">Back</h2>
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 -translate-x-3 w-full px-4 z-10">
                <button onClick={handlePrev} className="text-white bg-black bg-opacity-50 px-3 py-1 rounded-full"><GoArrowLeft /></button>
                <button onClick={handleNext} className="text-white bg-black bg-opacity-50 px-3 py-1 rounded-full"><GoArrowRight /></button>
            </div>

            {/* Image Display with Animation */}
            <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center items-center w-full h-[650px] md:h-[500px]"
            >
                <img
                    src={images[current].src}
                    alt={`Event ${current + 1}`}
                    className={`${images[current].orientation === "landscape" ? "w-full h-auto" : "h-full w-auto"} object-cover rounded-lg`}
                />
            </motion.div>

            {/* Indicator Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`cursor-pointer w-3 h-3 rounded-full ${index === current ? "bg-red-600" : "bg-gray-400"}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Events;
