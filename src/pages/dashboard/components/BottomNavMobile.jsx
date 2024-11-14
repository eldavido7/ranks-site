import { BiBookOpen } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { home, starting } from "../../../constants/app.routes";
import PropTypes from "prop-types";
import logo from "../../../assets/logo-light.png";

function BottomNavMobile() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner flex justify-around py-3 md:hidden">
      {/* Home Link */}
      <NavLink
        to={home}
        className={({ isActive }) =>
          isActive
            ? "text-primary font-bold flex flex-col items-center"
            : "flex flex-col items-center"
        }
      >
        <BiHome className="text-2xl" />
        <p className="text-xs">Home</p>
      </NavLink>

      <NavLink
        to={starting}
        className={({ isActive }) =>
          isActive
            ? "text-primary font-bold flex flex-col items-center"
            : "flex flex-col items-center"
        }
      >
        <img src={logo} alt="Logo" className="w-10 h-5" />
        <p className="text-xs">Starting</p>
      </NavLink>

      {/* Records Link */}
      <NavLink
        to="/rewards"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-bold flex flex-col items-center"
            : "flex flex-col items-center"
        }
      >
        <BiBookOpen className="text-2xl" />
        <p className="text-xs">Records</p>
      </NavLink>
    </div>
  );
}

BottomNavMobile.propTypes = {
  showside: PropTypes.bool,
  toggle: PropTypes.func,
};

export default BottomNavMobile;
