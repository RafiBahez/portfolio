import React, { Component } from "react";

class SideListItem extends Component {
  render(props) {
    return (
        <li className="py-3 px-4 pr-10 bg-port-second border-port-second">
          {this.props.children}
        </li>
    );
  }
}

export default SideListItem;
