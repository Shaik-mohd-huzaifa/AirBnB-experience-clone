import { Buttons } from "./elements/buttons";
import { Navbar } from "./components/navbar";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <h1>Hello World</h1>
      <Buttons type="submit" name="Sample" />
    </div>
  );
};

export default App;
