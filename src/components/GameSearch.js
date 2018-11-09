import React, { Component } from 'react';
import Game from './Game';

class Search extends Component {
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
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const key = "8cd10a7136710c1003c8e216d85941ace5a1f00e";
    const endpoint = `https://www.giantbomb.com/api/search/?api_key=`;
    const url = proxyUrl + endpoint + key + `&format=json&resources=game&query=${search}&limit=30`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const response = data.results;
        console.log(response);
        response.forEach(game => {
          this.setState(prevState => ({
            games: prevState.games.concat(game)
          }))
        });
      });

    this.setState({
      games: []
    })

  }

  handleSubmit = (e) => {
    const { title } = this.state;

    e.preventDefault();

    if (!title) {
      return;
    } else {
      this.handleGames(title);
    }

  }

  render() {
    const { games } = this.state;
    return (

      <div className="App">
        <div className="search-bar">
          <form>
            <input
              className="input-field"
              type="text"
              placeholder="Search Game"
              onChange={this.updateInput}
            />
            <button
              className="search-button"
              onClick={this.handleSubmit}
            >Search</button>
          </form>
        </div>
        <div className="container">
          {games.length > 0 ? (
            games.map(game => {
              return <Game
                key={game.id}
                icon={game.image.icon_url}
                gameTitle={game.name}
              />
            })
          ) : (
              console.log(this.state.title)
            )
          }


        </div>
      </div>

    );
  }
}

export default Search;
