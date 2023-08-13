import { Buttons } from "./elements/buttons";
import { Navbar } from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./assets/CardData";

const App = () => {
  return (
    <div className="Main-container">
      <Navbar />
      <Hero />
      <section className="card--container">
        <div className="inner-container">
          {Data.map((data) => (
            <Card
              imagesrc={data.coverImg}
              key={data.id}
              Description={data.title}
              Price={data.price}
              rating={data.stats.rating}
              Gstatus={data.availability}
              place={data.location}
              count={data.stats.reviewCount}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
