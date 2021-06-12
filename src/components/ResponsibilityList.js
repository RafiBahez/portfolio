import React, { Component } from "react";

class ResponsibilityList extends Component {
  render() {
    return (
        <ul className="py-2 text-sm">
          {this.props.children}
      </ul>
    );
  }
}

export default ResponsibilityList;
