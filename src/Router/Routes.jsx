import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Dashboard from "../Components/Dashboard/Dashboard";
import UserHome from "../Components/UserHome/UserHome";
import PrivateRouter from "./PrivateRouter";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },



  // dashboard
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'userH',
        element: <UserHome></UserHome>
      },



        // admin routes only

    ]
  },

]);