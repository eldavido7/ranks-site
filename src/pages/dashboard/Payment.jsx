import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

const Payment = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [exchange, setExchange] = useState("");

    return (
        <div className="bg-gray-50 p-2 md:p-6">
            <div className="w-fit bg-gray-200 p-2 rounded-lg shadow-sm mb-6">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center text-lg text-red-600"
                >
                    <GoArrowLeft />
                    <h2 className="text-xl font-bold text-gray-800 ml-4">Back</h2>
                </button>
            </div>

            <div className="bg-white rounded-lg shadow p-6 space-y-4">
                <p className="text-green-600 mb-4">Dear user, for your security please do not enter your bank details.</p>
                <div>
                    <label className="text-gray-600 font-semibold">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <div>
                    <label className="text-gray-600 font-semibold">Phone Number</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <div>
                    <label className="text-gray-600 font-semibold">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <div>
                    <label className="text-gray-600 font-semibold">Wallet Address</label>
                    <input
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <div>
                    <label className="text-gray-600 font-semibold">Exchange</label>
                    <input
                        type="text"
                        value={exchange}
                        onChange={(e) => setExchange(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
            </div>

            <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg mt-6">
                Confirm
            </button>
        </div>
    );
};

export default Payment;
