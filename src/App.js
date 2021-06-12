import "./App.css";

import Navigation from "./components/Navigation";
import Banner from "./views/Banner";
import About from "./views/About";
import Experince from "./views/Experience";
import Contact from "./views/Contact";

// leftside social media links
import SocialMedia from "./views/SocialMedia";

function App() {
  return (
    <div className="App ">
      <Navigation />

      <div className="grid grid-flow-col">
        <div className="w-16 h-full bg-main-darker">
            <SocialMedia />
        </div>

        <div className="grid-cols-10">
          <Banner />
          <About />
          <Experince />
          <Contact />
        </div>
        <div className="w-20 bg-port-main">right side</div>
      </div>
    </div>
  );
}

export default App;
