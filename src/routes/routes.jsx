import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainayout from "../layouts/MainLyout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LessonDetails from "../pages/LessonDetails/LessonDetails";
import Timetable from "../pages/Timetable/Timetable";
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
            path: "/timetable",
        element: <Timetable></Timetable>,
        loader: () => fetch("/yogaData.json")
        },
        {
            path: "/lessonsDetails/:id",
        element: <LessonDetails></LessonDetails>,
        loader: () => fetch("/yogaData.json")
        },

      ]
    },
  ]);
  export default router;