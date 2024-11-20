import { Outlet } from "react-router-dom";
import SideBarWeb from "./components/SideBarWeb";
import logo from "../../assets/logo-light.png";
import { useNavigate } from "react-router-dom";
import { home } from "../../constants/app.routes";
import profilep from "../../assets/profile-pic.jpg"

const HomeLayout = () => {

    const navigate = useNavigate();

    return (
        <div className="flex bg-gray-50 h-screen overflow-hidden">
            {/* Sidebar for Web and Mobile */}
            <SideBarWeb />
            {/* Main Content Area */}
            <div className="flex flex-col w-full h-full">
                {/* Top Navigation */}
                <div className="flex items-center justify-between h-16 bg-white shadow px-4 md:mx-4 md:hidden">
                    <div className="flex items-center justify-between w-full">
                        {/* Logo for mobile view, hidden on larger screens */}
                        <div className="flex items-center">

                            <img src={logo} onClick={() => navigate(home)} alt="Logo" className="w-24 h-auto block md:hidden" />

                            {/* Title for larger screens, hidden on mobile */}
                            {/* <h1 className="text-xl font-semibold hidden md:block ml-4">Adsterra</h1> */}
                        </div>

                        {/* User Icon on the Right */}
                        <div className="flex items-center space-x-2 text-gray-500">
                            <a href={"/home/profile"} className="flex">
                                <span className="text-lg font-medium">Tester</span>
                                <img
                                    src={profilep}
                                    alt="Profile"
                                    className="w-6 h-6 ml-2 rounded-full object-cover"
                                />
                            </a>
                        </div>
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
