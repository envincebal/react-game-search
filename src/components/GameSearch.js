import React, { Component } from 'react';
import GamesList from './GamesList';

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

  componentDidMount(){
    let storedGames = JSON.parse(sessionStorage.getItem("storedGames"));
    if(storedGames){
      storedGames.forEach(game => {
        this.setState(prevState => ({
          games: prevState.games.concat(game),
          loading: false
        }))
      })
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
      error: false,
      games: []
    });

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const response = data.results;
        if(!this.state.games.length) {
          response.forEach(game => {
            this.setState(prevState => ({
              games: prevState.games.concat(game),
              loading: false
            }))

          });
          sessionStorage.setItem("storedGames", JSON.stringify(this.state.games));
        }
        
        if (response.length > 0) {
          this.setState({
            loading: false
          })
        } else {
          this.setState({
            loading: false,
            timeOut: true
          })
        }
        
      })
      .catch(error => {
        console.log('Request failed', error);
      });

    setTimeout(() => {
      const { games, title } = this.state;

      if (!games.length && title) {
        this.setState({
          loading: false,
          timeOut: true
        })
      } else {
        this.setState({
          timeOut: false
        })
      }
    }, 10000);
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
            <span className="error">{error && ("You kind of need to type something first, genius.")}</span>
            <span className="error">{timeOut && ("We could not find the game you're looking for. Please try again.")}</span>
          </div>
        </div>
        <div className="games-container">
          {loading ? (
            <div className="loading-div">
              <i className="fa fa-3x fa-spinner fa-spin" />
              <p className="loading">Loading....</p>
            </div>
          ) : (
            <GamesList gamesList={games} />
          )
          }
        </div>
      </div>
    );
  }
}

export default Search;
