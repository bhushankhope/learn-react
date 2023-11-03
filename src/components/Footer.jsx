import React from 'react';
import '../../index.css';

const Footer = () => {
  return (
      <div className="text-white ft-container bg-black">
        <div>
          <div className='font-bold'>Foody Tech</div>
          <div>© 2023 Foody Tech Pvt Ltd</div>
        </div>
        <div>
          <div className='font-bold'>Company</div>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
          </ul>
        </div>
        <div>
          <div className='font-bold'>Contact Us</div>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div>
          <div className='font-bold'>Legal</div>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
  );
};

export default Footer;
