import React, { Component } from 'react';
import Search from './components/Search';
import MainPage from './components/MainPage';
// import { Route } from 'react-router-dom';
// import * as GameAPI from "../src/utils/GameAPI";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <div className="container">
          <MainPage />
        </div>
      </div>
    );
  }
}

export default App;
