import React, { Component } from "react";
import Title from "../components/Title";

class Contact extends Component {
  state = {
    // page data!
    viewData: {
      pageTitle: "Get in Touch",
      message: "My inbox is always open, if you have a question or want to get in touch say hello!"
    }
  }
  render() {
    return (
      <div
        id="contact"
        name="contact"
        className="bg-main-darker h-screen w-full js-show-on-scroll"
      >
        <div className="flex flex-col items-center py-20 sx:px-8 lg:px-20">
          <Title showLeftLine="inline-block">{this.state.viewData.pageTitle}</Title>

          <h3 className="text-center text-white sx:text-lg md:text-xl pb-20">
            {this.state.viewData.message}
            {" "}
          </h3>

          <div className="flex justify-center">
            <a
              href="mailto:rafibahez@mail.com"
              className="text-white border border-port-second cursor-pointer px-3 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main hover:border-main-darker"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
