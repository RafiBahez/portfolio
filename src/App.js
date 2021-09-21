import "./App.css";

import Navigation from "./components/Navigation";
import Banner from "./views/Banner";
import About from "./views/About";
import Experince from "./views/Experience";
import Contact from "./views/Contact";

// footer
import Footer from "./views/Footer";

// leftside social media links
import SocialMedia from "./views/SocialMedia";

// rightside emailid
import EmailId from "./views/EmailId";

function App() {
  return (
    <div className="App bg-main-darker">
      <div>
        <Navigation />
      </div>

      <div className="grid grid-flow-col">
        <div className="w-16 bg-port-main">
          <SocialMedia />
        </div>

        <div className="grid-cols-10">
          <Banner />
          <About />
          <Experince />
          <Contact />
          <Footer />
        </div>
        <div className="w-16 bg-port-main">
          <EmailId />
        </div>
      </div>
    </div>
  );
}

export default App;
