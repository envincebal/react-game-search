import React, { Component } from 'react';
import * as GameAPI from "./utils/GameAPI";
import MainPage from './components/MainPage';
import Games from './components/Games';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      games: []
    }
  }

  updateInput = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleGames = (search) => {
    const games = GameAPI.getGames(search);
    const gamesArray = Array.prototype.slice.call(games);

    gamesArray.forEach(game => {
      this.setState(prevState => ({
        games: prevState.games.concat(game)
      }))
    });
  }

  handleSubmit = (e) => {
    const { title } = this.state;
    e.preventDefault();

    if (!title.length) {
      return;
    }

  }

  render() {
    const { title } = this.state;
    return (
      <Router>
        <div className="App">
          <div className="search-bar">
            <div className="search-form">
              {console.log(this.handleGames("Mario"))}
              <form>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Search Game"
                  onChange={this.updateInput}
                />
                <button
                  className="search-button"
                  onClick={this.handleGames(title)}
                >Search</button>
              </form>
            </div>
          </div>
          <div className="container">
            <MainPage />
            <Games />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
