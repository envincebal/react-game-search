import React, { Component } from 'react';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import * as GameAPI from "../src/utils/GameAPI";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <div className="container">

      </div>
      </div>
    );
  }
}

export default App;
