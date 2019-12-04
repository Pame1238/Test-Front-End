import React, { Component } from "react";
import axios from "axios";
import Content from "../Content";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      apiResponse: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    axios.get("url");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
          <button type="submit" value="submit">
            buscar
          </button>
        </form>
        <Content value={this.state.value}></Content>
      </div>
    );
  }
}

export default Layout;
