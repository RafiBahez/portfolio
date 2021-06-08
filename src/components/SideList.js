import React, { Component } from "react";

class SideList extends Component {
  render() {
    return (
      <ul className="bg-second-darker text-white">
          {this.props.children}
      </ul>
    );
  }
}

export default SideList;
