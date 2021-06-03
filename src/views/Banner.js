import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
        <div className="bg-port-black h-screen px-20 py-20">
           
           <h3 className="text-white pb-5">Hi, my name is </h3>
           <h1 className="text-white text-5xl">Mohammad Rafi Bahez</h1>
           <h2 className="text-gray-300 text-3xl">I'm Software Engineer & Full Stack Web Developer</h2>
           <p className="text-white text-base w-8/12 pt-5 pb-14"> I’m software engineer who specializes in building creative digital experiences. I learned and worked with many technologies over the past years, and now I love working with JavaScript and PHP.</p>

           <a className="text-white border border-port-orange px-3 py-2">Get in Touch</a>
        </div>
    );
  }
}

export default Banner;
