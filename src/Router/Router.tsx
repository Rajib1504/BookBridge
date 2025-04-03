import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import UserLayout from "../Layout/UserLayout";
import DashBoard from "../Pages/User/DashBoard";
import MyProfile from "../Pages/User/MyProfile";
import MyBooks from "../Pages/User/MyBooks";
import MyHistory from "../Pages/User/MyHistory";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
    ],

    
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
        element: <MyProfile></MyProfile>
      },
      {
        path: "my-book",
        element: <MyBooks></MyBooks>
      },
      {
        path: "payments",
        element: <MyProfile></MyProfile>
      },
      {
        path: "history",
        element: <MyHistory></MyHistory>
      },
    ]
  }
]);

export default Router;
