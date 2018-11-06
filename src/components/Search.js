import React, { Component } from 'react';
// import * as GameAPI from "../src/utils/GameAPI";

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

  getGames = () => {

  }

  handleSubmit = (e) => {
    const {title} = this.state;
    e.preventDefault();

    if(!title.length){
      return;
    }

    this.setState()
  }

  render() {
    return (
      <div className="search-bar">
        <div className="search-form">
          <form>
            <input className="input-field" type="text" placeholder="Search Game" />
            <button className="search-button">Search</button>
          </form>
        </div>
      </div>
    );
  }

}

export default Search;