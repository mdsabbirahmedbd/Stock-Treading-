import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <div className="font-urbanist ">
   <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </div>,
);
