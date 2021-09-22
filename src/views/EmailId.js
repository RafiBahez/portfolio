import React, { Component } from "react";

class SocialMedia extends Component {
  state = {
    // page data!
    viewData: {
      emailid: "rafibahez@gmail.com",
    },
  };
  render() {
    return (
      <div class="h-screen fixed">
        <div className="h-screen w-16 flex flex-col justify-center">
          <h2 className="text-second-darker transform rotate-90 opacity-75 tracking-widest -m-12">
            {this.state.viewData.emailid}
          </h2>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
