import { Outlet } from "react-router-dom";
import SideBarWeb from "./components/SideBarWeb";
import logo from "../../assets/logo-light.png";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { profile } from "../../constants/app.routes";

const HomeLayout = () => {

    const navigate = useNavigate();

    return (
        <div className="flex bg-gray-50 h-screen overflow-hidden">
            {/* Sidebar for Web and Mobile */}
            <SideBarWeb />
            {/* Main Content Area */}
            <div className="flex flex-col w-full h-full">
                {/* Top Navigation */}
                <div className="flex items-center justify-between h-16 bg-white shadow px-4 md:mx-4">
                    <div className="flex items-center justify-between w-full">
                        {/* Logo for mobile view, hidden on larger screens */}
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="w-24 h-auto block md:hidden" />

                            {/* Title for larger screens, hidden on mobile */}
                            <h1 className="text-xl font-semibold hidden md:block ml-4">Adsterra</h1>
                        </div>

                        {/* User Icon on the Right */}
                        <button
                            onClick={() => navigate(profile)}
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <BiUser className="text-3xl" />
                        </button>
                    </div>
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
