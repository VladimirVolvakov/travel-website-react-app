// Styles:
import "./Options.styles.css";
// Component:
import OptionItem from "../OptionItem/OptionItem";
// Images:
import KeyWest from "../../assets/keywest.jpg";
import EmeraldBay from "../../assets/emerald-bay.jpg";
import Antigua from "../../assets/antigua.jpg";
import Bahamas from "../../assets/bahamas.jpg";
import Barbados from "../../assets/barbados.jpg";
import CostaRica from "../../assets/costa-rica.jpg";
import Grenada from "../../assets/grenada.jpg";
import Jamaica from "../../assets/jamaica.jpg";
import SaintLucia from "../../assets/saint-lucia.jpg";
import Curacao from "../../assets/curacao.jpg";
import Namibia from "../../assets/namibia.jpg";
import Seychelles from "../../assets/seychelles.jpg";
import Tanzania from "../../assets/tanzania.jpg";
import BoraBora from "../../assets/borabora.jpg";
import Cambodia from "../../assets/cambodia.jpg";
import Japan from "../../assets/japan.jpg";
import Maldives from "../../assets/maldives.jpg";
import Myanmar from "../../assets/myanmar.jpg";

const Options = () => {
  const destinations = [
    { image: EmeraldBay, text: "Emerald Bay" },
    { image: KeyWest, text: "Grand Key West" },
    { image: Antigua, text: "Grande Antigua" },
    { image: Bahamas, text: "The Bahamas" },
    { image: Barbados, text: "Barbados" },
    { image: CostaRica, text: "Costa Rica" },
    { image: Grenada, text: "Grenada" },
    { image: Jamaica, text: "Jamaica" },
    { image: SaintLucia, text: "Saint Lucia" },
    { image: Curacao, text: "Curaçao" },
    { image: Namibia, text: "Namibia" },
    { image: Seychelles, text: "Seychelles" },
    { image: Tanzania, text: "Tanzania" },
    { image: BoraBora, text: "Bora Bora" },
    { image: Cambodia, text: "Cambodia" },
    { image: Japan, text: "Japan" },
    { image: Maldives, text: "Maldives" },
    { image: Myanmar, text: "Myanmar"}
  ];

  return (
    <section name="booking" className="options">
      <div className="container">
        { destinations.map(item => (<OptionItem backgroundImage={item.image} text={item.text} />)) }
      </div>
    </section>
  );
};

export default Options;