import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from "./componets/Login.jsx";
import Home from "./componets/Home.jsx";
import DashBoard from "./componets/DashBoard.jsx";
import NavBar from "./componets/NavBar.jsx";
import LogOut from "./componets/Logout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
  },
  {
    path: "/DashBoard",
    element: (
      <>
        <NavBar />
        <DashBoard />
      </>
    ),
  },
  {
    path: "/logout",
    element: (
      <>
        <NavBar />
        <LogOut />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

