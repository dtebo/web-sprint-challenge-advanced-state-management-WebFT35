import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';

import SmurfList from './Smurfs/SmurfList';

class App extends Component {
  state = {
    url: `http://localhost:3333/smurfs`
  };

  componentDidMount(){
    this.props.fetchSmurfs(this.state.url);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfList />
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);
