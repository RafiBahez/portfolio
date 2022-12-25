import React, { Component } from "react";
import profile from "../assets/profile.jpg";

import { Link } from "react-scroll";

class Banner extends Component {
  
  state = {
    // page data!
    viewData: {
      greeting: "Hi, my name is ",
      name: "Rafi Bahez",
      designation: " I'm a Software Engineer",
      message: " I'm software engineer who specializes in web app development. I learned and worked with many technologies over the past years."
    }
  }

  render() {
    return (
      <div className="bg-main-darker h-screen w-full">
        <div className="flex flex-row items-center py-20 sx:px-8 lg:px-20">
          <div className="flex-1">
            <h3 className="text-white pb-5"> {this.state.viewData.greeting} </h3>
            <h1 className="text-white sx:text-xl text-5xl md:text-2xl lg:text-5xl">
              {this.state.viewData.name}
            </h1>
            <h2 className="text-port-gray md:text-xl lg:text-3xl">
            {this.state.viewData.designation}
            </h2>
            <p className="text-white text-base md:w-8/12 pt-5 pb-14">
              {" "}
              {this.state.viewData.message}
            </p>
            <Link
              className="text-white border border-port-second cursor-pointer px-3 py-3 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main hover:border-main-darker"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Get in Touch
            </Link>
          </div>

          <div className="hidden md:flex w-60 h-60 flex-0 justify-start bg-second-darker rounded-xl mt-10">
            <img
              className="w-60 h-60 rounded-xl transform -translate-x-3 -translate-y-3 "
              src={profile}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
