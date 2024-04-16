import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componets/app/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./componets/app/App";

const router = createBrowserRouter([
  {
    path: "/landing_meeting_website/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "//landing_meeting_website/",
      path: route.path === "//landing_meeting_website/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
