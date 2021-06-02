/* This example requires Tailwind CSS v2.0+ */
import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="bg-port-black shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-20 py-5  text-white">
          <div className="text-port-orange uppercase">
            <a href="https://rafibahez.github.io/portfolio">
              Bahez's Portfolio
            </a>
          </div>

          <div className="text-white">
            <ul className="flex flex-row items-center space-x-14">
              <li className="display-block hover:text-gray-300">
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
              <a href="#contact">Contact</a>
              </li>
              <li className="border border-port-orange px-3 py-2">
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
