import { Outlet } from "react-router-dom";
import UserNavBar from "../Components/UserDashboard/UserNavBar";
import SideNavBar from "../Components/UserDashboard/SideNavBar";

const UserLayout = () => {
  return (
    <div className="bg-base-200">
      <UserNavBar></UserNavBar>
      <div className="flex">
        <div>
          <SideNavBar></SideNavBar>
        </div>
        <div className="flex-1 p-8 lg:ml-64">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
