// Styles: 
import "./Hero.styles.css";
// Icon:
import { AiOutlineSearch } from "react-icons/ai";
// Video:
import Video from "../../assets/maldivesVideo.mp4";

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top Locations Worldwide</h2>
        <form className="form">
          <div>
            <input type="text" placeholder="Search Your Destination" />
          </div>
          <div>
            <button><AiOutlineSearch className="icon" /></button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;