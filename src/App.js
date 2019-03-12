import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { mockDataPull } from './actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import TitleBar from "./components/Title/TitleBar";
import AccountSettings from "./components/Title/AccountSettings/index";
import CardContainer from './components/Cards/CardContainer'
import NewCard from './components/Cards/NewCard';

class App extends Component {

  componentDidMount(){
    this.props.mockDataPull();
  }

  render() {
    return (
      <div className="App">
        <Route path="/home/" render={props => <TitleBar {...props} />} />

        <Route
          path="/home/account_settings"
          render={props => <AccountSettings {...props} />}
        />
        <Route path="/home/" render={props => <CardContainer {...props} />} />

        <Route path="/home/cards/new" render={props => <NewCard {...props} />} />

        <Route path="/home/cards/:id" render={props => <div>hi</div>}/>

      </div>
    );
  }
}


export default withRouter(connect(null, { mockDataPull })(App));
