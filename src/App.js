import React, { Component } from 'react';
import Nav from './components/Search';
import MainPage from './components/MainPage';
// import { Route } from 'react-router-dom';
// import * as GameAPI from "../src/utils/GameAPI";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <MainPage />
        </div>
      </div>
    );
  }
}

export default App;
