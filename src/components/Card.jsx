import CardImage from "../elements/CardImage";
import DispImage from "../assets/katie-zaferes.png";
import Rating from "../elements/rating";

const data = {
  Katie: {
    imagesrc: "katie-zaferes.png",
    count: 23,
    place: "USA",
    rating: 4.5,
    Price: 145,
    Gstatus: "Not Available",
    Description: "This is a Katie Zaferes Experience",
  },
  beti: {
    imagesrc: "katie-zaferes.png",
    count: 5,
    place: "CA",
    rating: 4.7,
    Price: 124,
    Gstatus: "Available",
    Description: "This is a Katie Zaferes Experience",
  },
};

const Names = Object.keys(data);

const CardCreation = ({ namo }) => {
  const { imagesrc, count, place, rating, Price, Gstatus, Description } =
    data[namo];

  return (
    <div className="card">
      <CardImage src={`src/assets/${imagesrc}`} alt="" status={Gstatus} />
      <Rating alt="Star" count={count} place={place} rating={rating} />
      <p className="card--discription">{Description}</p>
      <p className="card--price">
        <strong>{`From $${Price}`}</strong>/ person
      </p>
    </div>
  );
  // <div className="card">
  //   <CardImage src={DispImage} alt="Katie-Zaferes" status="Not Available" />
  //   <Rating alt="Star" count="23" place="USA" rating="4.5" />
  //   <p className="card--discription">This was a Amazing Experience</p>
  //   <p className="card--price">
  //     <strong>From $145</strong>/ person
  //   </p>
  // </div>
};

const Card = () => {
  return (
    <div>
      {Names.map((Name) => (
        <CardCreation key={Name} namo={Name} />
      ))}
    </div>
  );
};

export default Card;
