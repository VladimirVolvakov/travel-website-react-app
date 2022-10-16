// Styles:
import "./OptionItem.styles.css";

const OptionItem = ({backgroundImage, text}) => {
  return (
    <article className="option-item">
      <img src={backgroundImage} alt={text} />
      <div className="overlay">
        <p>{text}</p>
      </div>
    </article>
  );
};

export default OptionItem;