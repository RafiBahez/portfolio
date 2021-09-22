import React, { Component } from "react";
import { Link } from "react-scroll";

class MobileMenu extends Component {
  render() {
    return (
      <div className="static">
        <div className="absolute top-20 left-0 w-full bg-port-second">
          <div className="flex flex-col justify-content-center text-center text-white my-4">
            <Link
              className="cursor-pointer hover:bg-second-darker py-2"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
            <Link
              className="cursor-pointer hover:bg-second-darker py-2"
              to="experience"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Experience
            </Link>

            <Link
              className="cursor-pointer hover:bg-second-darker py-2"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>

            <div className="cursor-pointer hover:bg-second-darker py-2">
              <a
                className="cursor-pointer hover:bg-second-darker py-2"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
