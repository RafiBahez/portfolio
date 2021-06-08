import React, { Component } from "react";

class Title extends Component {
  render(props) {
    return (
      <div className="flex flex-row items-center gap-3 pt-10 pb-14">
        <div
          className={"bg-second-darker h-1 w-32 " + this.props.showLeftLine}
        ></div>
        <div>
          <h1 className="text-white text-3xl pb-5"> {this.props.children} </h1>
        </div>
        <div className="bg-second-darker h-1 w-32"></div>
      </div>
    );
  }
}

export default Title;
