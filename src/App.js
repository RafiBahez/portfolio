import "./App.css";

import Navigation from "./components/Navigation";
import Banner from "./views/Banner";
import About from "./views/About";
import Experince from "./views/Experience";

function App() {
  return (
    <div className="App ">
      <Navigation />

      <div className="grid grid-flow-col">
        <div className="w-20 bg-black">left side</div>

        <div className="grid-cols-10">
          <Banner />
          <About />
          <Experince />
        </div>
        <div className="w-20 bg-black">right side</div>
      </div>
    </div>
  );
}

export default App;
