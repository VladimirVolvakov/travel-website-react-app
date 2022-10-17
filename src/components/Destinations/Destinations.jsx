// Styles:
import "./Destinations.styles.css";
// Images:
import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import KeyWest from "../../assets/keywest.jpg";

const Destinations = () => {
  return (
    <section name="destinations" className="destinations">
      <div className="container">
        <h2>All-Inclusive Resorts</h2>
        <p>On the Caribbean Best Beaches</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={BoraBora} alt="Bora Bora" />
          <img src={BoraBora2} alt="Bora Bora" />
          <img src={Maldives} alt="Maldives" />
          <img src={Maldives2} alt="Maldives" />
          <img src={KeyWest} alt="Key West" />
        </div>
      </div>
    </section>
  );
};

export default Destinations;