import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainayout from "../layouts/MainLyout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LessonDetails from "../pages/LessonDetails/LessonDetails";
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
            path: "/lessonsDetails",
        element: <LessonDetails></LessonDetails>
        },

      ]
    },
  ]);
  export default router;