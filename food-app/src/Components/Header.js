import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
function Header() {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();
  console.log(onlineStatus);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">Online status : {useOnlineStatus()? "✅":"🔴"}</li>
          <li className="nav-item"><Link to={"/"}>Home</Link></li>
          <li className="nav-item" ><Link to={"/about"}>About us</Link></li>
          <li className="nav-item"><Link to={"/contact"}>Contact us</Link></li>
          <li className="nav-item"><Link to={"/groceries"}>Groceries</Link></li>
          <li className="nav-item">Cart</li>
          <button
            className="login-btn"
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
