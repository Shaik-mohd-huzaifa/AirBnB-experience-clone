/* eslint-disable react/prop-types */
import CardImage from "../elements/CardImage";
import Rating from "../elements/rating";

const Card = (props) => {
  // const { imagesrc, count, place, rating, Price, Gstatus, Description } =
  //   props;

  return (
    <div className="card">
      <CardImage
        src={`src/assets/${props.imagesrc}`}
        alt=""
        status={props.Gstatus}
      />
      <Rating
        alt="Star"
        count={props.count}
        place={props.place}
        rating={props.rating}
      />
      <p className="card--discription">{props.Description}</p>
      <p className="card--price">
        <strong>{`From ${props.Price}`}</strong>/ person
      </p>
    </div>
  );
};

export default Card;
