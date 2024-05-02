import "./App.css";
import Header from "./Components/Header";
import React from "react";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="header sticky top-0" >
      <Header ></Header>
      </div>
      {/*Outlet --
      component is used as a placeholder within a parent route component to render child routes
      will be replaced with the respective route component defined in createBrowserRouter (refer index.js)*/}
      <Outlet></Outlet>
    </div>
  );
}
export default App;
