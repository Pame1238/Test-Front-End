import React, { Component } from "react";

class ListView extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.value}</li>
        </ul>
      </div>
    );
  }
}

export default ListView;
