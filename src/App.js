import React, { Component } from 'react';
import './App.css';
import "./globalStyles.scss";
import { Route } from 'react-router-dom';
import { mockDataPull } from './actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import TitleBar from "./components/Title/TitleBar";
import AccountSettings from "./components/Title/AccountSettings/index";
import CardContainer from './components/Cards/CardContainer'
import NewCard from './components/Cards/NewCard';
import FullCard from './components/Cards/FullCard';

class App extends Component {

  componentDidMount(){
    this.props.mockDataPull();
  }

  render() {
    return (
      <div className="App">
        <Route path="/home/"  render={props => <TitleBar {...props} />} />

        <Route
          path="/home/account_settings" exact
          render={props => <AccountSettings {...props} />}
        />
        <Route path="/home/" render={props => <CardContainer {...props} />} />

        <Route path="/home/cards/:id" exact render={props => <FullCard {...props} {...this.props.realEstate.find(item => item.id === props.match.params.id)} />}/>

        <Route path="/home/cards/new" exact render={props => <NewCard {...props} />} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    realEstate: [...state.user.realEstate.buy, ...state.user.realEstate.sell]
  }
}


export default withRouter(connect(mapStateToProps, { mockDataPull })(App));
