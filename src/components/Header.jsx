import { useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import '../../index.css';

const Header = () => {
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div style={{ backgroundColor: '#19c964', marginBottom: '2rem' }} className='shadow-lg'>
      <div
        className="header flex justify-between items-center h-16"
      >
        <div className="ml-4">
        <Link to={"/"}>
        <span className="uppercase font-bold">Foody</span>
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 gap-4">
          {/* <li>
            <Link to={"/"}>Home</Link>
          </li> */}
          <li>
            <Link to={"/log-in"}>Log In</Link>
          </li>
          <li>
            <Link to={"/sign-up"}>Sign Up</Link>
          </li>
          <li className="font-bold">
            <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
          </li>
          <li className="font-bold">{data.loggedInUser}</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
