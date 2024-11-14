import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

const PersonalInfo = () => {
    const [userName, setUserName] = useState("tester");
    const [phone, setPhone] = useState("09488584855");
    const [gender, setGender] = useState("male");
    const [loginp, setLoginp] = useState("");
    const [withdrawp, setWithdrawp] = useState("");

    return (
        <div className="bg-gray-50 p-6">
            <div className="flex items-center mb-6">
                <button onClick={() => window.history.back()} className="text-lg text-red-600">
                    <GoArrowLeft />
                </button>
                <h2 className="text-xl font-bold text-gray-800 ml-4">Personal Info</h2>
            </div>
            {/* Personal Information Form */}
            <div className="bg-white rounded-lg shadow p-4 space-y-4 mb-4">
                <div>
                    <label className="text-gray-600 font-semibold">User Name</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Phone</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Gender</label>
                    <input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Login Password</label>
                    <input
                        type="password"
                        value={loginp}
                        onChange={(e) => setLoginp(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold">Withdraw Password</label>
                    <input
                        type="password"
                        value={withdrawp}
                        onChange={(e) => setWithdrawp(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
            </div>

            {/* Update Button */}
            <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg">
                Update
            </button>
        </div>
    );
};

export default PersonalInfo;
