// Hook:
import { useState } from "react";
// Styles:
import "./Navbar.styles.css";
// Menu icons:
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
// React component for animating vertical scrolling:
import { Link } from "react-scroll";

const Navbar = () => {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

  const burgerClickHandler = () => setIsBurgerMenuActive(!isBurgerMenuActive);

  return (
    <section name="home" className={isBurgerMenuActive ? "navbar navbar-bg" : "navbar"}>
      <div className={isBurgerMenuActive ? "logo dark" : "logo"}>
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home"><li>Home</li></Link>
        <Link to="destinations" smooth duration={500}><li>Destinations</li></Link>
        <Link to="travel" smooth duration={500}><li>Travel</li></Link>
        <Link to="booking" smooth duration={500}><li>Booking</li></Link>
        <Link to="views" smooth duration={500}><li>Views</li></Link>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" />
        <BsPerson className="icon" />
      </div>
      <div className="burger-menu-closed" onClick={burgerClickHandler} >
        { isBurgerMenuActive 
          ? (<AiOutlineClose className="icon dark" />)
          : (<HiOutlineMenuAlt4 className="icon" />)
        }        
      </div>

      <div className={isBurgerMenuActive ? "mobile-menu active" : "mobile-menu"}>
        <ul className="burger-menu-nav">
          <Link to="home"><li>Home</li></Link>
          <Link to="destinations" smooth duration={500}><li>Destinations</li></Link>
          <Link to="travel" smooth duration={500}><li>Travel</li></Link>
          <Link to="booking" smooth duration={500}><li>Booking</li></Link>
          <Link to="views" smooth duration={500}><li>Views</li></Link>
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
    </section>
  );
};

export default Navbar;
