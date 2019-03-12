import React, { Component } from "react";
import "./globalStyles.scss";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios
      .get("https://appraiser-back-end.herokuapp.com/works")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return <div className="App">Hello World</div>;
  }
}

export default App;
