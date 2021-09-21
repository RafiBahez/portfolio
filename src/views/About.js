import React, { Component } from "react";
import Title from "../components/Title";

class About extends Component {
  render() {
    return (
      <div
        id="about"
        name="about"
        className="bg-main-darker h-screen w-full js-show-on-scroll"
      >
        <div className="py-20 sx:px-8 lg:px-20">
          <Title showLeftLine="hidden">About Me</Title>

          <div className="flex flex-row items-center">
            <div className="flex-1">
              <p className="text-white text-base pb-14">
                I have a masters degree in computer science from Technical
                University of Berlin. I’ve been working as a software engineer,
                full stack web developer and university lecturer for over 10
                years.
              </p>

              <p className="text-white text-base pb-5">
                Here are a few technologies that I’ve been working with
                recently:
              </p>
              <div className="flex sx:flex-col md:flex-row text-white">
                <div className="flex flex-col space-2 pr-20">
                  <div className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-port-second inline-block pr-2 h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    JavaScript
                  </div>
                  <div className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-port-second inline-block pr-2 h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Reactjs
                  </div>
                  <div className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-port-second inline-block pr-2 h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Vuejs
                  </div>
                </div>
                <div className="flex flex-col space-2 pr-20">
                  <div className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-port-second inline-block pr-2 h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    PHP
                  </div>
                  <div className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-port-second inline-block pr-2 h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Laravel
                  </div>
                  <div className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-port-second inline-block pr-2 h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Wordpress
                  </div>
                </div>
                <div className="flex flex-col space-2 pr-20">
                  <div className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-port-second inline-block pr-2 h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sass / Less
                  </div>
                  <div className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-port-second inline-block pr-2 h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Tailwindcss
                  </div>
                  <div className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-port-second inline-block pr-2 h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Bootstrap
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
