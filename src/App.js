import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import TitleBar from "./components/Title/TitleBar";
import AccountSettings from "./components/Title/AccountSettings/index";
import CardContainer from './components/Cards/CardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/home/" render={props => <TitleBar {...props} />} />

        <Route
          path="/home/account_settings"
          render={props => <AccountSettings {...props} />}
        />
        <Route path="/home/" render={props => <CardContainer {...props} />} />

      </div>
    );
  }
}

export default App;
