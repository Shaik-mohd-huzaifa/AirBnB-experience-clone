import CardImage from "../elements/CardImage";
import DispImage from "../assets/katie-zaferes.png";
import Rating from "../elements/rating";
const Card = () => {
  return (
    <div className="card">
      <CardImage src={DispImage} alt="Katie-Zaferes" status="Not Available" />
      <Rating alt="Star" count="23" place="USA" rating="4.5" />
      <p className="card--discription">This was a Amazing Experience</p>
      <p className="card--price">
        <strong>From $145</strong>/ person
      </p>
    </div>
  );
};

export default Card;
