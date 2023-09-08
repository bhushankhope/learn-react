import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-lg mb-8 bg-indigo-900">
      <div className="w-36">
        <Link to={"/"}>
          <img src={LOGO_URL} className="logo"></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 gap-4 text-white">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
          <Link to={"/cart"}>Cart</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
