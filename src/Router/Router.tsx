import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import AllBooks from "../Pages/dashboard/admin/AllBooks";
import ManageUsers from "../Pages/dashboard/admin/ManageUsers";
import TrafficAnalytics from "../Pages/dashboard/admin/TrafficAnalytics";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AllBooks />,
      },
      {
        path: "all-books",
        element: <AllBooks />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "traffic",
        element: <TrafficAnalytics />,
      },
    ],
  },
]);

export default Router;
