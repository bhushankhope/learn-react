import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const data = useContext(UserContext);
  return (
    <div className="flex justify-between items-center shadow-lg mb-8 bg-indigo-900">
      <div className="w-36">
        <Link to={"/"}>
          <img src={LOGO_URL} className="logo"></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 gap-4 text-white">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li className="font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
