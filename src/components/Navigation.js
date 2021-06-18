/* This example requires Tailwind CSS v2.0+ */
import React, { Component } from "react";
import {Link} from "react-scroll";

class Navigation extends Component {
  render() {
    return (
      <nav className="bg-main-darker shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-20 py-5  text-white">
          <div className="text-port-second uppercase">
            <a href="https://rafibahez.github.io/portfolio">
              Bahez's Portfolio
            </a>
          </div>

          <div className="text-white">
            <ul className="flex flex-row items-center space-x-14">
              <li className="cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main">
                <Link activeClass="active" to="about"  spy={true} smooth={true} offset={50} duration={500}>About</Link>
              </li>
              <li className="cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main">
                <Link activeClass="active" to="experience"  spy={true} smooth={true} offset={50} duration={500}>Experience</Link>
              </li>
              <li className="cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main">
                <Link activeClass="active" to="contact"  spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
              </li>
              <li className="border border-port-second cursor-pointer px-3 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main">
                <a href="#resume">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
