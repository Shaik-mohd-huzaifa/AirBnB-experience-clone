import GridImage from "../assets/photo-grid.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={GridImage} alt="" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
