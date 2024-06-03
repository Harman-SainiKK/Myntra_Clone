import React from "react";
import { Link, useNavigate } from "react-router-dom";
import googlePlay from "../Images/google play.png"
import ApplePlay from "../Images/-apple_store.png"
const Footer = () => {
 const navigate =  useNavigate();
  return (
    <>
    <div className="footer">
      <div className="section">
        <h6>ONLINE SHOPPING</h6>
        <Link to="/Men">MEN</Link>
          <Link to="/Women">WOMEN</Link>
          <Link to="/Kids">KIDS</Link>
          <Link to="/Homeliving">HOME & LIVING</Link>
          <Link to="/Beauty">BEAUTY</Link>
      </div>

      <div className="section">
        <h6>CUSTOMER POLICIES</h6>
        <Link to="/ContactUs">Contact Us</Link>
        <Link to="#">Shipping</Link>
        <Link to="#">Return</Link>
        <Link to="#">Orders & LIVING</Link>
        <Link to="#">Privacy Policy</Link>
      </div>

      <div className="section">
        <h6>EXPERIENCE MYNTRA APP ON MOBILES</h6>
        <img src={googlePlay} alt="" />
        <img src={ApplePlay} alt="" />
      </div>
    </div>
    <div className="copyright">
      <p>In case of any concern, <Link to="ContactUs">Contact Us</Link></p>
      <a href="#">&copy; 2024 www.myntra.com. All rights reserved.</a>
      <Link to="#">A Flipkart company</Link>
    </div>
    </>

  );
};

export default Footer;
