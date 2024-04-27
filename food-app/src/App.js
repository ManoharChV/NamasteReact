import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import React from "react";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
