import React, { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Portfolio", element: <Portfolio /> },
      { path: "/Contact", element: <Contact /> },
      {
        path: "*",
        element: (
          <h1 className="bg-warning text-white text-center">
            Consider That I make Page For Un Found, Have a Good Day :D
          </h1>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <h1 className="bg-warning text-white text-center">
        Consider That I make Page For Un Found, Have a Good Day :D
      </h1>
    ),
  },
]);

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={routers} />
      </>
    );
  }
}
