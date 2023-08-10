/* eslint-disable react/prop-types */
function CardImage(props) {
  return (
    <div className="card--Image">
      <p className="card--Status">{props.status}</p>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default CardImage;
