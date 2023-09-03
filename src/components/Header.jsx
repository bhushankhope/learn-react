import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to={'/'}>
        <img src={LOGO_URL} className="logo"></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact-us'}>Contact Us</Link>
          <Link to={'/cart'}>Cart</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
