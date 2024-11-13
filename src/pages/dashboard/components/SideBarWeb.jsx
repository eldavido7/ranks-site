import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { deposit, home, withdraw } from "../../../constants/app.routes";
import { motion } from "framer-motion";
import { slideIn, zoomIn } from "../../../motion";

function SideBarWeb() {

  return (
    <div className="w-[368px] bg-white px-4 py-10 hidden md:flex flex-col justify-between h-screen shadow-md overflow-y-auto">
      {/* Logo */}
      <motion.div
        initial={zoomIn(1, "min").initial}
        whileInView={zoomIn(1, "min").animate}
      >
        Logo
      </motion.div>

      {/* Navigation Links */}
      <div className="mt-10 flex flex-col space-y-6 text-gray-600 flex-grow">
        <motion.div initial={slideIn("left", 0).initial} whileInView={slideIn("left", 2).animate}>
          <NavLink
            to={home}
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

        <motion.div initial={slideIn("left", 0).initial} whileInView={slideIn("left", 2).animate}>
          <NavLink
            to={withdraw}
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

        <motion.div initial={slideIn("left", 0).initial} whileInView={slideIn("left", 2).animate}>
          <NavLink
            to={deposit}
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold flex items-center gap-x-4 w-full px-5 py-3"
                : "flex items-center gap-x-4 w-full px-5 py-3"
            }
          >
            <MdOutlineDashboard className="text-2xl" />
            <p>Deposit</p>
          </NavLink>
        </motion.div>
      </div>

      {/* Logout Button */}
      <motion.button
        initial={slideIn("up", null).initial}
        whileInView={slideIn("up", 2).animate}
        className="text-red-500 flex items-center gap-x-4 mt-10"
      >
        <CiLogout className="text-2xl" />
        <p>Logout</p>
      </motion.button>
    </div>
  );
}

export default SideBarWeb;
