import "./App.css";
import Header from "./Components/Header";
import React, { useContext, useState } from "react";
import { UserContext } from "./utils/userContext";
import { Outlet } from "react-router-dom";
function App() {
  const {loggedInUser}=useContext(UserContext);
  const [userName, setUserName]=useState(loggedInUser);
  return (
    <UserContext.Provider value={{loggedInUser:userName, setUserName:setUserName}}><div>
      <div className="header sticky top-0" >
      <Header ></Header>
      </div>
      {/*Outlet --
      component is used as a placeholder within a parent route component to render child routes
      will be replaced with the respective route component defined in createBrowserRouter (refer index.js)*/}
      <Outlet></Outlet>
    </div>
    </UserContext.Provider>

  );
}
export default App;
