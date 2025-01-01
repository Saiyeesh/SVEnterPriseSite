import "./Navbar.css";
import logo from "..//../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";

import { useState } from "react";

import { Link } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="navbarBack">
        <div className="firstNav">
          <h4>Call/WhatsApp:- +91 85229 79159</h4>
          <div className="navicons">
            <div className="personalIcons">
              <a
                href="https://www.whatsapp.com/catalog/919963265472/?app_absent=0"
                target="_blank"
                className="alinks"
              >
                <FaWhatsapp className="icons" />
              </a>
            </div>
            <div className="personalIcons">
              <a
                href="https://www.instagram.com/sv_enterprises___/"
                target="_blank"
                className="alinks"
              >
                <FaInstagram className="icons" />
              </a>
            </div>
            <div className="personalIcons">
              <a href="" target="_blank" className="alinks">
                <IoCallOutline className="icons" />
              </a>
            </div>
            <div className="personalIcons">
              <a href="" target="_blank" className="alinks">
                <CiFacebook className="icons" />
              </a>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="logoBox">
            <img src={logo} alt="logo" className="logo" />
            <h4>SV_Enterprises___</h4>
          </div>
          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
          >
            <Link to="/" className="linkLine">
              <li>Home</li>
            </Link>
            <Link to="/products" className="linkLine">
              <li>Products</li>
            </Link>
            <Link to="/about" className="linkLine">
              <li>About Us</li>
            </Link>
            <Link to="/contact" className="linkLine">
              <li>Contact Us</li>
            </Link>
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? "✖" : "☰"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
