import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between items-center shadow-lg mb-8 bg-indigo-900 h-16">
      <div className="ml-4">
        <Link to={"/"}>
        <span className="uppercase text-white">Foody</span>
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
          <li className="font-bold">
            <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
          </li>
          <li className="font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
