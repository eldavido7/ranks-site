import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { home, withdraw } from "../../../constants/app.routes";
import { motion } from "framer-motion";
import { slideIn, zoomIn } from "../../../motion";
import PropTypes from "prop-types";
import { RiCloseCircleFill } from "react-icons/ri";

function SideBarMobile({ showside, toggle }) {
  return (
    <div
      className={`fixed top-0 left-0 w-[268px] bg-gray-100 h-screen z-40 transition-transform transform ${showside ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-between py-10 px-4`}
    >
      {/* Header with Placeholder Logo and Close Button */}
      <motion.div
        initial={zoomIn(1, "min").initial}
        whileInView={zoomIn(1, "min").animate}
        className="flex justify-between items-center"
      >
        <div className="w-40 h-10 bg-gray-300 flex items-center justify-center text-lg font-bold text-gray-600">
          Logo
        </div>
        <button onClick={toggle}>
          <RiCloseCircleFill className="text-xl text-red-500" />
        </button>
      </motion.div>

      {/* Navigation Links */}
      <div className="mt-10 flex flex-col space-y-6 text-gray-600 flex-grow">
        <motion.div initial={slideIn("left", 0).initial} whileInView={slideIn("left", 2).animate}>
          <NavLink
            to={home}
            onClick={toggle}
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold flex items-center gap-x-4 w-full px-5 py-3"
                : "flex items-center gap-x-4 w-full px-5 py-3"
            }
          >
            <MdOutlineDashboard className="text-2xl" />
            <p>Home</p>
          </NavLink>
        </motion.div>
      </div>

      <div className="mt-10 flex flex-col space-y-6 text-gray-600 flex-grow">
        <motion.div initial={slideIn("left", 0).initial} whileInView={slideIn("left", 2).animate}>
          <NavLink
            to={withdraw}
            onClick={toggle}
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold flex items-center gap-x-4 w-full px-5 py-3"
                : "flex items-center gap-x-4 w-full px-5 py-3"
            }
          >
            <MdOutlineDashboard className="text-2xl" />
            <p>Withdraw</p>
          </NavLink>
        </motion.div>
      </div>

      {/* Logout Button */}
      <motion.button
        initial={slideIn("up", null).initial}
        whileInView={slideIn("up", 2).animate}
        onClick={toggle}
        className="text-red-500 flex items-center gap-x-4 mt-10"
      >
        <CiLogout className="text-2xl" />
        <p>Logout</p>
      </motion.button>
    </div>
  );
}

SideBarMobile.propTypes = {
  showside: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default SideBarMobile;
