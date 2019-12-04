import React, { Component } from "react";
import ListView from "../ListView";

class Content extends Component {
  render() {
    return (
      <div>
        <ListView value={this.props.value}></ListView>
      </div>
    );
  }
}

export default Content;
