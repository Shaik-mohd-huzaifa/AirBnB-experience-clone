import { Buttons } from "./elements/buttons";
import { Navbar } from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <h1>Hello World</h1>
      <Buttons type="submit" name="Sample" />
      <Card />
    </div>
  );
};

export default App;
