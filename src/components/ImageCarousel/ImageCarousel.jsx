// Styles:
import "./ImageCarousel.styles.css";
// Carousel:
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Images:
import Seychelles2 from "../../assets/seychelles2.jpg";
import Seychelles3 from "../../assets/seychelles3.jpg";
import Seychelles4 from "../../assets/seychelles4.jpg";
import Seychelles5 from "../../assets/seychelles5.jpg";
import Seychelles6 from "../../assets/seychelles6.jpg";
import Seychelles7 from "../../assets/seychelles7.jpg";
import Seychelles8 from "../../assets/seychelles8.jpg";

const ImageCarousel = () => {
  return (
    <section className="image-carousel">
      <Carousel 
        className="carousel" 
        showArrows 
        autoPlay 
        infiniteLoop 
        interval={2000}
      >
        <div>
          <img src={Seychelles2} alt="Seychelles" />
        </div>
        <div>
          <img src={Seychelles3} alt="Seychelles" />
        </div>
        <div>
          <img src={Seychelles4} alt="Seychelles" />
        </div>
        <div>
          <img src={Seychelles5} alt="Seychelles" />
        </div>
        <div>
          <img src={Seychelles6} alt="Seychelles" />
        </div>
        <div>
          <img src={Seychelles7} alt="Seychelles" />
        </div>
        <div>
          <img src={Seychelles8} alt="Seychelles" />
        </div>
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
