import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className="bg-port-black h-screen px-20 py-20">
        <h1 className="text-white text-3xl pb-5">Places I've Worked </h1>

        <div className="flex flex-row gap-10">
          <div className="flex-0">
            <ul className="border-l-8 border-port-orange text-white bg-port-orange">
              <li className="py-3 pl-2 pr-10">Python Technology Services</li>
              <li className="py-3 px-2 pr-10">Kabul University</li>
              <li className="py-3 px-2 pr-10">Zawul Professional Services</li>
              <li className="py-3 px-2 pr-10">AZ Corporation</li>
            </ul>
          </div>

          <div className="flex-1 text-white">
            <header>
              <h1 className="text-xl">Sr. Software Developer</h1>
              <h3 className="text-xs pb-5">March 2018 to April 2021</h3>
              <h2 className="text-base">Responsibilites:</h2>
              <ul className="py-2 text-sm">
                <li>
                  I have a masters degree in computer science from Technical
                  University of Berlin. I’ve been working as a software
                  engineer, full stack web developer and university lecturer for
                  over 10 years.
                </li>
                <li>
                  I have a masters degree in computer science from Technical
                  University of Berlin. I’ve been working as a software
                  engineer, full stack web developer and university lecturer for
                  over 10 years.
                </li>
              </ul>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
