import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/userContext";
function Header() {
  const [btnName, setBtnName] = useState("Login");
  const {loggedInUser}=useContext(UserContext)
  return (
    <div className="flex justify-between h-[80px] border-solid border-2 border-black  mb-1 bg-gray-100">
      <div className="logo-container">
        <img className="h-[100%] w-30" alt="logo" src={LOGO_URL}></img>
      </div>
      <div>
        <ul className="flex items-center py-6 ">
          <li className="px-5 cursor-pointer">
            Online status : {useOnlineStatus() ? "✅" : "🔴"}
          </li>
          <li className="px-5 cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-5 cursor-pointer">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-5 cursor-pointer">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-5 cursor-pointer">
            <Link to={"/groceries"}>Groceries</Link>
          </li>
          <li className="px-5 cursor-pointer">Cart</li>
          <h2>{loggedInUser}</h2>
          <button
            className="px-5"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
