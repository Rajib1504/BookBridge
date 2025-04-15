// @ts-nocheck
import { Link, NavLink } from "react-router-dom";
import userImage from "../assets/user.webp";
// import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PiBellSimpleRinging } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import useAxiosPublic from './../Hooks/axiosPublic';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const axiiospublic = useAxiosPublic()
  
  // const [theme, setTheme] = useState<"light" | "dark">(() => {
  //   // Get the theme from localStorage or default to 'light'
  //   return (localStorage.getItem("theme") as "light" | "dark") || "light";
  // });

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const notificationCount = 3; // Example notification count
  const cartCount = 2; // Example cart count

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/categories">Categories</NavLink>
      </li>
      <li>
        <NavLink to="/browse-books">Browse Books</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Book Listing</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">My Books</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/admin">Dashboard</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout Successful !");
        navigate("/");
      })
      .catch((error: Error) => {
        toast.error("Error logging out ! " + error.message);
      });
  };
  return (
    <div className="px-4 lg:px-6">
      <div className="navbar justify-between py-2">
        {/* Navbar Start */}
        <div className="flex items-center gap-1">
          <Link
            to="/"
            className="hidden lg:block text-2xl font-bold font-Gilda tracking-tight relative group"
          >
            <span className="absolute inset-0 blur-lg opacity-30  transition-opacity duration-300"></span>
            <div className="relative text-gray-700 transition-colors duration-300">
              <span className="text-yellow-600">B</span>ook
              <span className="text-red-600">B</span>ridge
            </div>
          </Link>

          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal font-bold text-sm font-Inter">
              {links}
            </ul>
          </div>

          <div className="dropdown lg:hidden">
            <button
              // onClick={toggleDropdown}
              className="btn btn-outline btn-warning"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {/* {dropdownOpen && (
              <ul className="menu dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10">
                <li className="font-bold italic text-xl my-2 mx-auto tracking-tight relative group">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-300 mb-5"></span>
                  <Link
                    to={"/"}
                    className="flex gap-0 relative text-gray-500 group-hover:text-white transition-colors duration-300"
                  >
                    <span className="text-yellow-600">B</span>ook
              <span className="text-red-600">B</span>ridge
                  </Link>
                </li>
                <div className="font-semibold text-yellow-500">{links}</div>
              </ul>
            )} */}
          </div>
        </div>

        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 font-bold text-yellow-500">
            {links}
          </ul>
        </div> */}

        {/* Navbar End */}
        <div className="flex items-center space-x-4">
          {/* <p className="text-sm text-gray-500">{user && user.email}</p> */}

          <div className="relative">
            {/* Input field */}
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered pl-10 w-24 md:w-auto" // Add padding to the left for the icon
            />

            {/* Search icon */}
            <FaSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18} // Adjust the size as needed
            />
          </div>
          {/* notification icon */}
          <button className="relative text-2xl p-2">
            <PiBellSimpleRinging />
            {/* Notification badge */}
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 text-xs font-semibold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>

          {/* Cart icon */}
          <button className="relative text-2xl p-2">
            <FaCartShopping />
            {/* Cart badge */}
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 text-xs font-semibold text-white bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>



          {/* Profile Dropdown */}
          <div
            ref={profileDropdownRef}
            className="dropdown dropdown-end relative"
          >
            <button
              onClick={toggleProfileDropdown}
              className="btn btn-ghost btn-circle avatar"
              aria-label="Toggle Profile Dropdown"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 bg-gray-200">
                {user && user.email ? (
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile"
                    src={user?.photoURL || "user"}
                    className="w-full h-full object-cover animate-pulse"
                  />
                ) : (
                  <img src={userImage} alt="" />
                )}
              </div>
            </button>
            {profileDropdownOpen && (
              <ul className="font-Inter menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {/* Username (non-clickable) */}
                <li>
                  <div
                    id="name"
                    className="justify-between text-base-content font-semibold"
                  >
                    {user?.email ? user.displayName : ""}
                  </div>
                </li>
                <li>
                  <Link to={"/dashboard/admin/profile"}>Profile</Link>
                </li>

                <li>
                  {user && user?.email ? (
                    <button
                      onClick={handleLogout}
                      className="text-error font-semibold"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/login" className="text-primary font-semibold">
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
