import React, { Component } from "react";
import Title from "../components/Title";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="flex flex-col items-center bg-port-main h-100% px-20 py-20">
        
        <Title showLeftLine="inline-block">Get in Touch</Title>
        
        <h3 className="text-center text-white text-xl pb-20">
          My inbox is always open, if you have a question or want to get in
          touch say hello!{" "}
        </h3>

        <div className="flex justify-center">
          <a className="text-white border border-port-second px-3 py-2">
            Say Hello
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
