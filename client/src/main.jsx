import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Admin from "./pages/Admin/Admin";
import Validation from "./pages/Validation/Validation";
import "./i18n";

const fetchProject = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/project`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: fetchProject,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/admin",
        element: <Admin />,
        loader: fetchProject,
      },
      {
        path: "/validation",
        element: <Validation />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
