import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="flex flex-col bg-port-black px-20 py-20">
        <h1 className="text-center text-white text-3xl pb-5">Get in Touch </h1>

        <h3 className="text-center text-white text-xl pb-10">
          My inbox is always open, if you have a question or want to get in
          touch say hello!{" "}
        </h3>

        <div className="flex justify-center">
          <a className="text-white border border-port-orange px-3 py-2">
            Say Hello
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
