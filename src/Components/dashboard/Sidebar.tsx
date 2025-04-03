import { BiLogOut } from "react-icons/bi";
import {
  FaBook,
  FaChartBar,
  FaHome,
  FaQuestion,
  FaTimes,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

interface SidebarProps {
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  // Define menus based on userType
  const menuItems = [
    {
      name: "All Books",
      icon: <FaBook />,
      path: "all-books",
    },
    {
      name: "Manage Users",
      icon: <FaUsers />,
      path: "manage-users",
    },
    {
      name: "Traffic Analytics",
      icon: <FaChartBar />,
      path: "traffic",
    },
    { name: "Profile", icon: <FaUser />, path: "profile" },
    {
      name: "Book Status",
      icon: <FaQuestion />,
      path: "book-status",
    },
  ];
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen shadow-lg flex flex-col">
      {/* Header Section */}
      <div className="p-6 text-center flex lg:block justify-between">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Dashboard</h2>
          {/* Replace with dynamic user type if needed */}
          <p className="text-sm text-gray-300 mt-2">
            {/* Welcome, {user?.displayName} */}
            Welcome
          </p>
        </div>
        {/* Close Button for Mobile */}
        <div className=" lg:hidden ">
          <button
            onClick={toggleSidebar}
            className="text-red-500 text-sm focus:outline-none rounded-full border border-red-500 p-2"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col flex-grow mt-6 mx-2">
        {/* Main menu items */}
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li id="sidebar" key={index}>
              <NavLink
                to={item.path}
                className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition"
              >
                <span className="text-lg mr-3">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="divider divider-warning px-3"></div>
        {/* Back to Home link */}
        <ul className="">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition"
            >
              <span className="text-lg mr-3">
                <FaHome />
              </span>
              <span className="font-medium">Back to Home</span>
            </Link>
          </li>
          <li
            // onClick={userLogout}
            className="cursor-pointer flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition"
          >
            <span className="text-lg mr-3">
              <BiLogOut />
            </span>
            <span className="font-medium">Logout</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
