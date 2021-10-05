import "./App.css";

import Navigation from "./components/Navigation";
import Banner from "./views/Banner";
import About from "./views/About";
import Experience from "./views/Experience";
import Github from "./views/Github";
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
        <div className="hidden md:block w-16 bg-port-main">
          <SocialMedia />
        </div>

        <div className="grid-cols-10">
          <Banner />
          <About />
          <Experience />
          <Github />
          <Contact />
          <Footer />
        </div>
        <div className="hidden md:block w-16 bg-port-main">
          <EmailId />
        </div>
      </div>
    </div>
  );
}

export default App;
