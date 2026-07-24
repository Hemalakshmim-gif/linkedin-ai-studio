import "../styles/Sidebar.css";
import { motion } from "framer-motion";
import {
  PenSquare,
  FileText,
  Settings,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const menuItems = [

    {
      title: "Create",
      path: "/create",
      icon: <PenSquare size={24} />,
    },

    {
      title: "Preview",
      path: "/preview",
      icon: <FileText size={24} />,
    },

    {
      title: "Settings",
      path: "/settings",
      icon: <Settings size={24} />,
    },

    {
      title: "Profile",
      path: "/profile",
      icon: <User size={24} />,
    },

  ];

  return (

    <motion.aside
      className="sidebar"
      initial={{ x: -70, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: .6 }}
    >

      <div className="sidebar-top">

        {menuItems.map((item) => (

          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item ${
                isActive ? "active" : ""
              }`
            }
            title={item.title}
          >

            <motion.div
              whileHover={{
                scale:1.08,
                y:-3,
              }}
              whileTap={{
                scale:.94,
              }}
            >

              {item.icon}

            </motion.div>

          </NavLink>

        ))}

      </div>

    </motion.aside>

  );

}

export default Sidebar;