import React, { Component } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import GameSearch from './components/GameSearch';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/games" component={GameSearch} />
              <Route exact path="/about" component={About} />}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
