
import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Products/Product";

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
               }
          ]
      
     }
]);