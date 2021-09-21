/* This example requires Tailwind CSS v2.0+ */
import React, { Component } from "react";
import { Link } from "react-scroll";

import MobileMenu from "./MobileMenu";

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = { mobileMenuOpen: false };

    // registered events
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
  }

  render() {
    return (
      <nav className="bg-main-darkder shadow-lg mx-auto">
        <div className="w-full container mx-auto p-6">
          <div className="flex items-center justify-between">
            {
              //Profile Logo
            }
            <div className="text-port-second uppercase">
              <a href="https://rafibahez.github.io/portfolio">
                Bahez's Portfolio
              </a>
            </div>

            {
              //Primary Navbar items
            }
            <div className="text-white">
              <ul className="hidden md:flex flex-row items-center space-x-6">


                <li className="cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main">
                  <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Experience
                  </Link>
                </li>
                <li className="cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
                <li className="border border-port-second cursor-pointer px-3 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main">
                  <a href="#resume">Resume</a>
                </li>
              </ul>
            </div>
            {
              // Mobile Menu Button
            }
            <div className="md:hidden flex items-center">
              <button
                className="focus:outline-none"
                onClick={this.toggleMobileMenu}
              >
                <svg
                  class=" w-6 h-6 text-port-second "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div>{this.state.mobileMenuOpen ? <MobileMenu /> : ""}</div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
