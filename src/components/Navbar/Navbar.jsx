// Hook:
import { useState } from "react";
// Styles:
import "./Navbar.styles.css";
// Menu icons:
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

  const burgerClickHandler = () => setIsBurgerMenuActive(!isBurgerMenuActive);

  return (
    <div className={isBurgerMenuActive ? "navbar navbar-bg" : "navbar"}>
      <div className="logo">
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Booking</li>
        <li>Views</li>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" />
        <BsPerson className="icon" />
      </div>
      <div className="burger-menu-closed" onClick={burgerClickHandler} >
        <HiOutlineMenuAlt4 className="icon" />
      </div>

      <div className={isBurgerMenuActive ? "mobile-menu active" : "mobile-menu"}>
        <ul className="burger-menu-nav">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Booking</li>
          <li>Views</li>
        </ul>
        <div className="burger-menu-bottom">
          <div className="burger-menu-buttons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-media-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
