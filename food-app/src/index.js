import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Error } from "./Components/Error";
import Body from "./Components/Body";
import RestaurantMenu from "./Components/RestaurantMenu"
const root = ReactDOM.createRoot(document.getElementById("root"));


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/about",
        element:<About></About>,
        errorElement:<Error></Error>
    
      },
      {
        path:"/contact",
        element:<Contact></Contact>,
        errorElement:<Error></Error>
      },
      {
        path:"/",
        element:<Body></Body>,
        errorElement:<Error></Error>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu></RestaurantMenu>
      },
    ]
  },
 
])

root.render(
<RouterProvider router={appRouter}></RouterProvider>
);
