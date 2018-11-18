import React, { Component } from 'react';
import Game from './Game';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      games: [],
      error: false,
      loading: false,
      timeOut: false
    }
  }

  updateInput = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleGames = (search) => {
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const key = `8cd10a7136710c1003c8e216d85941ace5a1f00e`;
    const endpoint = `https://www.giantbomb.com/api/search/?api_key=`;
    const url = `${proxyUrl}${endpoint}${key}&format=json&resources=game&query=${search}&limit=30`;

    this.setState({
      loading: true,
      timeOut: false,
      games: []
    })

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const response = data.results;

        response.forEach(game => {
          this.setState(prevState => ({
            games: prevState.games.concat(game),
            loading: false
          }))
        });
      })
      .catch(error => {
        console.log('Request failed', error);
      });

    setTimeout(() => {
      const { games } = this.state;

      if (!games.length) {
        this.setState({
          loading: false,
          timeOut: true
        })
      }
    }, 8000);
  }

  handleSubmit = (e) => {
    const { title } = this.state;
    e.preventDefault();

    if (!title) {
      this.setState({
        error: true,
        timeOut: false
      })
    } else {
      this.setState({ error: false })
      this.handleGames(title);
    }
  }

  render() {
    const { games, error, loading, timeOut } = this.state;
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
          <div className="error-content">
            <span className="error">{error ? "You kind of need to type something first, genius." : null}</span>
            <span className="error">{timeOut ? "We could not find the game you're looking for. Please, try again." : null}</span>
          </div>
        </div>
        <div className="games-container">
          {loading ? (
            <div className="loading-div">
              <i className="fa fa-3x fa-spinner fa-spin" />
              <p className="loading">Loading....</p>
            </div>
          ) : (
              games.map(game => {
                return <Game
                  key={game.id}
                  game={game}
                  icon={game.image.icon_url}
                  gameTitle={game.name}
                />
              })
            )
          }
        </div>
      </div>
    );
  }
}

export default Search;
