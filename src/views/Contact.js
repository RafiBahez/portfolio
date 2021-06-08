import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="flex flex-col bg-port-main h-100% px-20 py-20">
       
       <div className="flex flex-row items-center justify-center gap-3">
       <div className="bg-second-darker h-1 w-32"></div>
          <div>
            <h1 className="text-white text-3xl pb-5">Get in Touch </h1>
          </div>
          <div className="bg-second-darker h-1 w-32"></div>
        </div>

        <h3 className="text-center text-white text-xl pb-10 pt-20">
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
