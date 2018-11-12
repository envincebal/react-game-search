import React, { Component } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import GameSearch from './components/GameSearch';
import GamesDetails from './components/GamesDetails';
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
              <Route exact path="/react-game-search/" component={MainPage} />
              <Route path="/games" component={GameSearch} />
              <Route  path="/about" component={About} />}
              <Route  path="/details" component={GamesDetails} />}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
