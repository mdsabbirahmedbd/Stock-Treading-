import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.js";

createRoot(document.getElementById("root")).render(
  <div className="font-urbanist ">
    <RouterProvider router={router}></RouterProvider>
  </div>,
);
