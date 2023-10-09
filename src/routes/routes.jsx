import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LessonDetails from "../pages/LessonDetails/LessonDetails";
import Timetable from "../pages/Timetable/Timetable";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Feedback from "../pages/Feedback/Feedback";
import BookedLesson from "../pages/BookedLesson/BookedLesson";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <PageNotFound/>,
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
            path: "/bookedLesson",
        element: <PrivateRoute><BookedLesson></BookedLesson></PrivateRoute>
        },
        {
          path: "/feedback",
      element: <PrivateRoute><Feedback></Feedback></PrivateRoute>
      },
        {
            path: "/timetable",
        element: <Timetable></Timetable>,
        loader: () => fetch("/yogaData.json")
        },
        {
            path: "/lessonsDetails/:id",
        element: <PrivateRoute><LessonDetails></LessonDetails></PrivateRoute>,
        loader: () => fetch("/yogaData.json")
        },

      ]
    },
  ]);
  export default router;