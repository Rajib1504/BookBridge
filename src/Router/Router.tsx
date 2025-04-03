import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import AllBooks from "../Pages/dashboard/admin/AllBooks";
import ManageUsers from "../Pages/dashboard/admin/ManageUsers";

import CreateBook from "../Pages/Dashboard/CreateBook";

import UserLayout from "../Layout/UserLayout";
import DashBoard from "../Pages/User/DashBoard";
import MyProfile from "../Pages/User/MyProfile";
import MyBooks from "../Pages/User/MyBooks";
import MyHistory from "../Pages/User/MyHistory";
import Payments from "../Pages/User/Payments";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard/user/my-books/create",
        element: <CreateBook />,
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
    path: "/dashboard",
    element: <UserLayout></UserLayout>,
    children: [
      {
        path: "user",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "user/my-books/create",
        element: <CreateBook />,
      },
      {
        path: "my-book",
        element: <MyBooks></MyBooks>,
      },
      {
        path: "payments",
        element: <Payments></Payments>,
      },
      {
        path: "history",
        element: <MyHistory></MyHistory>,
      },
    ],
  },
]);

export default Router;
