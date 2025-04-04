import { JSX } from "react";
import { LiaBookSolid } from "react-icons/lia";
import {
  MdOutlineCreateNewFolder,
  MdOutlinePayment,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { RiFileUserLine, RiHistoryFill } from "react-icons/ri";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const SideNavBar = () => {
  const menus: JSX.Element = (
    <>
      <li>
        <NavLink to={"user"}>
          {" "}
          <MdOutlineSpaceDashboard className="text-xl"></MdOutlineSpaceDashboard>{" "}
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to={"profile"}>
          {" "}
          <RiFileUserLine className="text-xl"></RiFileUserLine> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to={"user/my-books/create"}>
          <MdOutlineCreateNewFolder className="text-xl"></MdOutlineCreateNewFolder>
          Post Book
        </NavLink>
      </li>
      <li>
        <NavLink to={"my-book"}>
          <LiaBookSolid className="text-xl"></LiaBookSolid> My Books
        </NavLink>
      </li>
      <li>
        <NavLink to={"history"}>
          {" "}
          <RiHistoryFill className="text-xl"></RiHistoryFill> My History
        </NavLink>
      </li>
      <li>
        <NavLink to={"payments"}>
          {" "}
          <MdOutlinePayment className="text-xl"></MdOutlinePayment> Payments
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed z-50">
      <div className="drawer lg:drawer-open font-Inter">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center p-2">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-soft btn-secondary btn-lg btn-square drawer-button lg:hidden"
          >
            <TbLayoutSidebarLeftCollapse className="text-4xl"></TbLayoutSidebarLeftCollapse>
          </label>
        </div>
        <div className="drawer-side border-2 border-base-200 shadow-[6px_1px_8px_-9px_rgba(0,0,0,0.2)]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 text-base-content min-h-full w-64 p-4">
            {/* Sidebar content here */}
            {menus}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
