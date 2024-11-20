import { Outlet } from "react-router-dom";
import SideBarWeb from "./components/SideBarWeb";
import logo from "../../assets/logo-light.png";
import { useNavigate } from "react-router-dom";
import { home } from "../../constants/app.routes";
import profilep from "../../assets/profile-pic.jpg"

const HomeLayout = () => {
    const navigate = useNavigate();

    return (
        <div className="flex bg-gray-50 h-screen">
            <SideBarWeb />
            <div className="flex flex-col w-full h-full">
                <div className="nav-bar flex items-center justify-between h-16 bg-white shadow px-4 md:mx-4">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            onClick={() => navigate(home)}
                            alt="Logo"
                            className="w-24 h-auto block md:hidden"
                        />
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                        <a href="/home/profile" className="flex">
                            <span className="text-lg font-medium">Tester</span>
                            <img
                                src={profilep}
                                alt="Profile"
                                className="w-6 h-6 ml-2 rounded-full object-cover"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto -webkit-overflow-scrolling: touch md:p-4 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
