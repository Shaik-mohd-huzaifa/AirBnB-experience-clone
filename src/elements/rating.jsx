/* eslint-disable react/prop-types */
import star from "../assets/star.png";

const Rating = (props) => {
  const ratingString = `(${props.count}) : ${props.place}`;
  return (
    <div className="card--rating">
      <img src={star} alt={props.alt} className="rating--image" />
      <p className="rating--number">{props.rating}</p>
      <p className="rating--place">{ratingString}</p>
    </div>
  );
};

export default Rating;
