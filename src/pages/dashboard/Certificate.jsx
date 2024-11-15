import { GoArrowLeft } from "react-icons/go";
import certImage from "../../assets/cert.jpg";

const Certificate = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center">
            {/* Back Button */}
            <div className="flex items-center w-full p-4">
                <button onClick={() => window.history.back()} className="text-lg text-red-600">
                    <GoArrowLeft />
                </button>
                <h2 className="text-xl font-bold text-gray-800 ml-4">Back</h2>
            </div>

            {/* Certificate Image */}
            <div className="flex-grow flex justify-center items-center">
                <img
                    src={certImage}
                    alt="Certificate of Incorporation"
                    className="w-full h-[full] object-contain"
                />
            </div>
        </div>
    );
};

export default Certificate;
