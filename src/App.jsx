import { Buttons } from "./elements/buttons";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/Hero";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <h1>Hello World</h1>
      <Buttons type="submit" name="Sample" />
    </div>
  );
};

export default App;
