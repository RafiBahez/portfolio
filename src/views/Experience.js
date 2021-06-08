import React, { Component } from "react";
import Title from "../components/Title";

class Experience extends Component {
  render() {
    return (
      <div className="bg-port-main h-screen px-20 py-20">
        
        <Title showLeftLine="hidden">Places I've Worked </Title>

        <div className="flex flex-row gap-10">
          <div className="flex-0">
            <ul className="bg-second-darker text-white">
              <li className="py-3 px-4 pr-10 bg-port-second border-port-second">
                Python Technology Services
              </li>
              <li className="py-3 px-4 pr-10 opacity-50">Kabul University</li>
              <li className="py-3 px-4 pr-10 opacity-50">
                Zawul Professional Services
              </li>
              <li className="py-3 px-4 pr-10 opacity-50">AZ Corporation</li>
            </ul>
          </div>

          <div className="flex-1 text-white">
            <header>
              <h1 className="text-xl">Sr. Software Developer</h1>
              <h3 className="text-xs pb-5">March 2018 to April 2021</h3>
              <h2 className="text-base ">Responsibilites:</h2>
              <ul className="py-2 text-sm">
                <li className="pb-2">
                  <div className="flex flex-row justify-center items-center gap-3 ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-port-second h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      I have Worked on design and development of 5 software as a
                      service products for Afghanistan market. Collected
                      requirements and analyzed them using Unified Modeling
                      Language (UML).
                    </div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex flex-row justify-start items-center gap-3 ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-port-second h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      Lead creative design team to collaborate over prototype
                      using Adobe XD, implement HCI, and responsive design
                      principles. As a result designed system to support both
                      LTR & RTL languages and gain 100% customers satisfaction.
                      Used lazy loading feature to reduce time to load which
                      provided better user experience.
                    </div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex flex-row justify-start items-center gap-3 ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-port-second h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      Developed softwares using Laravel 5.x - 8.x as server side
                      framework API and MySQL as a backend database. Used Vuejs
                      2.3 - 3.x and Bootstrap 4.x -5.x for frontend development.
                      Those products have been used by over 300 organizations
                      with positive user experiences.
                    </div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex flex-row justify-start items-center gap-3 ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-port-second h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      Created multi-language docs and tutorials for softwares
                      that increased customer’s satisfaction.
                    </div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex flex-row justify-start items-center gap-3 ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-port-second h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      Adopted Agile as a software development methodology
                      resulted effective management.
                    </div>
                  </div>
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
