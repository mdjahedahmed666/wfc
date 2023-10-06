import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainayout from "../layouts/MainLyout";
import Home from "../pages/Home/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainayout></Mainayout>,
      children:[
        {
            path: "/",
        element: <Home></Home>
        },

      ]
    },
  ]);
  export default router;