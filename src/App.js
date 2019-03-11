import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import TitleBar from "./components/Title/TitleBar";
import AccountSettings from "./components/Title/AccountSettings/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/home/" render={props => <TitleBar {...props} />} />

        <Route
          path="/home/account_settings"
          render={props => <AccountSettings {...props} />}
        />
      </div>
    );
  }
}

export default App;
