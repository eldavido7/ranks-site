import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBarWeb from "./components/SideBarWeb";
import SideBarMobile from "./components/SideBarMobile";

const HomeLayout = () => {
    const [showside, setShowside] = useState(false);

    const toggleSidebar = () => {
        setShowside(!showside);
    };

    return (
        <div className="flex bg-gray-50 h-screen overflow-hidden">
            {/* Sidebar for Web and Mobile */}
            <SideBarWeb />
            <SideBarMobile showside={showside} toggle={toggleSidebar} />

            {/* Main Content Area */}
            <div className="flex flex-col w-full h-full">
                {/* Top Navigation */}
                <div className="flex items-center justify-between h-16 bg-white shadow px-4">
                    <button onClick={toggleSidebar} className="block md:hidden">
                        {/* Placeholder for a menu icon or button to toggle sidebar */}
                        <span>☰</span>
                    </button>
                    <h1 className="text-xl font-semibold">Home</h1>
                </div>

                {/* Main Outlet for Nested Routes */}
                <div className="flex-1 overflow-y-auto md:p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
