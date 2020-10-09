import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';

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
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);
