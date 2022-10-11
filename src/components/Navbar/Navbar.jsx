// Menu icons:
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
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
      <div className="burger-menu">
        <HiOutlineMenuAlt4 className="icon" />
      </div>
    </div>
  );
};

export default Navbar; 