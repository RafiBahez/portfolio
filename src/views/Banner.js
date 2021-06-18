import React, { Component } from "react";

class Banner extends Component {
  render() {
    let style = { height: "calc(100vh - 82px)" };
    return (
      <div className="bg-main-darker px-20 py-28" style={style}>
        <h3 className="text-white pb-5">Hi, my name is </h3>
        <h1 className="text-white text-5xl">Mohammad Rafi Bahez</h1>
        <h2 className="text-port-gray text-3xl">
          I'm Software Engineer & Full Stack Web Developer
        </h2>
        <p className="text-white text-base w-8/12 pt-5 pb-14">
          {" "}
          I’m software engineer who specializes in building creative digital
          experiences. I learned and worked with many technologies over the past
          years, and now I love working with JavaScript and PHP.
        </p>

        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "#contact";
          }}
          className="text-white border border-port-second cursor-pointer px-3 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main hover:border-main-darker"
        >
          Get in Touch
        </button>
      </div>
    );
  }
}

export default Banner;
