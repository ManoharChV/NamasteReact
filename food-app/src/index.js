import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Error } from "./Components/Error";
import Body from "./Components/Body";
import RestaurantMenu from "./Components/RestaurantMenu"
import { lazy } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));


//Chunking
//Code Splitting
//Lazy Loading
//On Demand Loading
//Dynamic Bundling
//Dynamic Import
const Grocery=lazy(()=>{return import("./Components/Groceries")})
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
        element:<RestaurantMenu></RestaurantMenu>,
        errorElement:<Error></Error>
      },
      {
        path:"/Groceries",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery></Grocery></Suspense> ,
        errorElement:<Error></Error>
      },
    ]
  },
 
])

root.render(
<RouterProvider router={appRouter}></RouterProvider>
);
