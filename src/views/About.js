import React, { Component } from "react";
import profile from "../assets/profile.jpg";

class About extends Component {
  render() {
    return (
      <div className="bg-port-black h-screen px-20 py-20">
        <h1 className="text-white text-3xl pb-5">About Me </h1>

        <div className="flex flex-row">
          <div className="flex-1">
            <p className="text-white text-base w-8/12 pt-5 pb-14">
              I have a masters degree in computer science from Technical
              University of Berlin. I’ve been working as a software engineer,
              full stack web developer and university lecturer for over 10
              years.
            </p>

            <p className="text-white text-base w-8/12 pb-5">
              Here are a few technologies that I’ve been working with recently:
            </p>
            <div className="flex flex-row gap-20 text-white pb-14">
            <div className="flex flex-col gap-2">
              <div>JavaScript</div>
              <div>Reactjs</div>
              <div>Vuejs</div>
            </div>
            <div className="flex flex-col gap-2">
              <div>PHP</div>
              <div>Laravel</div>
              <div>Wordpress</div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Sass / Less</div>
              <div>Tailwindcss</div>
              <div>Bootstrap</div>
            </div>
            </div>
          </div>

          <div className="w-40 h-40 flex-0 justify-start bg-port-orange rounded-xl">
            <img
              className="w-40 h-40 rounded-xl transform -translate-x-3 -translate-y-3"
              src={profile}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
