import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";

import AllBooks from "../Pages/dashboard/admin/AllBooks";
import ManageUsers from "../Pages/dashboard/admin/ManageUsers";
import TrafficAnalytics from "../Pages/dashboard/admin/TrafficAnalytics";

import CreateBook from "../Pages/User/CreateBook";

import UserLayout from "../Layout/UserLayout";
import DashBoard from "../Pages/User/DashBoard";
import MyProfile from "../Pages/User/MyProfile";
import MyBooks from "../Pages/User/MyBooks";
import MyHistory from "../Pages/User/MyHistory";
import Payments from "../Pages/User/Payments";
import Books from "../Pages/Books/Books";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Profile from "../Pages/dashboard/admin/Profile";
import BookDetails from "../Pages/Books/BookDetails";
import About from "../Pages/About/About";
import Categories from "../Pages/Categories/Categories";
import ContactUs from "../Pages/ContactUs/ContactUs";

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
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/browse-books",
        element: <Books />,
      },
      {
        path: "/browse-books/:id",
        element: <BookDetails />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
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
      {
        path: "profile",
        element: <Profile />,
      },
    
    ]
  },

  {
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
