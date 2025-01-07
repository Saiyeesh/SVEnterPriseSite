import "./Navbar.css";
import logo from "..//../assets/svlogo.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";

import { useState } from "react";

import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setisMenuOpen(false)
  }

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
          <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
          </div>
          <ul className={isMenuOpen ? "nav-links active" : "nav-links"} >
            <Link to="/" className="linkLine" onClick={closeMenu}>
              <li>Home</li>
            </Link>
            <Link to="/products" className="linkLine" onClick={closeMenu}>
              <li>Products</li>
            </Link>
            <Link to="/about" className="linkLine" onClick={closeMenu}>
              <li>About Us</li>
            </Link>
            <Link to="/contact" className="linkLine" onClick={closeMenu}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
