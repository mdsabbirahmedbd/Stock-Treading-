
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Products/Products";
import Pricing from "../pages/Pricing/Pricing";
import SingUp from "../pages/SingUp/SingUp";
import Support from "../pages/Support/Support";
import Dashboard from "../Layouts/Dashboard";
import Watchlist from "../Components/DashboardComponents/WatchList/Watchlist";
import Orders from "../Components/DashboardComponents/Orders";
import Holdings from "../Components/DashboardComponents/Holdings";
import Positions from "../Components/DashboardComponents/Positions";
import Funds from "../Components/DashboardComponents/Funds";
import { DashbordHome } from "../Components/DashboardComponents/DashbordHome";
import Login from "../pages/Login/Login";
import PrivateRoute from "../Routes/PrivateRoute";



export const router = createBrowserRouter([
     {
          path:"/",
          Component : Root,
          children : [
               {
                    index : true,
                    Component : Home
               },
               {
                path :"/about",
                Component : About
               },
               {
                path :"/product",
                Component : Product
               },
               {
                path:'/pricing',
                Component : Pricing
               },
               {
                path:'/singup',
                Component : SingUp
               },
               {
                 path:'/login',
                 Component : Login
               },
               {
                path:'/support',
                Component : Support
               }
          ]
      
     },
     {
          path:"/dashboard",
          element : <PrivateRoute><Dashboard /></PrivateRoute>,
          children : [
               {
                    index : true,
                    Component :DashbordHome
               },
               {
                    path :"watchlist",
                    Component : Watchlist
               },
               {
                    path :"orders",
                    Component : Orders
               },
               {
                    path :"holdings",
                    Component : Holdings
               },
               {
                    path :"positions",
                    Component : Positions
               },
               {
                    path :"funds",
                    Component : Funds
               }
          ]
     }
]);