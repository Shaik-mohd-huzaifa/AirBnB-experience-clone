import { Buttons } from "./elements/buttons";
import { Navbar } from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./assets/CardData";

console.log(Data);

const data = "Josh";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <h1>Hello World</h1>
      <Buttons type="submit" name="Sample" />
      <div className="card--container"></div>
      <p>Hello {data}</p>
      <div>
        {Data.map((data) => {
          return <p key={data.key}>data.Key</p>;
        })}
      </div>
    </div>
  );
};

export default App;
