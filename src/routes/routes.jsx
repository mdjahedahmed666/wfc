import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainayout from "../layouts/MainLyout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainayout></Mainayout>,
      children:[
        {
            path: "/",
        element: <Home></Home>
        },
        {
            path: "/login",
        element: <Login></Login>
        },
        {
            path: "/register",
        element: <Register></Register>
        },
        {
            path: "/servicedetails",
        element: <ServiceDetails></ServiceDetails>
        },

      ]
    },
  ]);
  export default router;