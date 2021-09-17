import React, { Component } from "react";

class SideListItem extends Component {

  render() {

    return (
      <li
        className={
          "py-3 px-4 pr-10 bg-port-second border-port-second cursor-pointer" +
          (this.props.organization.id === this.props.activeLink
            ? " bg-second-darker"
            : " opacity-50 ")
        }
        onClick={() => this.props.handler(this.props.organization.id)}
      >
        {this.props.organization.name}
      </li>
    );
  }
}

export default SideListItem;
