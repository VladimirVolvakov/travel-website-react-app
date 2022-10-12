// Menu icons:
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
// Styles:
import "./Navbar.styles.css";

const Navbar = () => {
  return (
    <div className="navbar">
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
      <div className="burger-menu-closed">
        <HiOutlineMenuAlt4 className="icon" />
      </div>

      <div className="burger-menu-opened">
        <ul className="burger-menu-nav">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Booking</li>
          <li>Views</li>
        </ul>
        <div className="burger-menu-bottom">
          <div className="burger-menu-icons">
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
