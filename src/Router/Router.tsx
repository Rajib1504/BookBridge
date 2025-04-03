import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import CreateBook from "../Pages/Dashboard/CreateBook";

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
        path: "/dashboard/user/my-books/create",
        element: <CreateBook />,
      },
    ],
  },
]);

export default Router;
