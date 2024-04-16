import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componets/app/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./componets/app/App";

const router = createBrowserRouter([
  {
    path: "/React_landing_phone/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "//React_landing_phone/",
      path: route.path === "//React_landing_phone/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
