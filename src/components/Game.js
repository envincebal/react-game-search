import React, { Component } from 'react';
import { Link } from "react-router-dom";
import errorIcon from "../img/no-icon.png";

class Game extends Component {


  addDefaultSrc = (ev) => {
    ev.target.src = errorIcon;
  }

  render() {
    const { icon, gameTitle, gameDetails } = this.props;

    return (
      <div className="game-box">
        <Link
          style={{ textDecoration: 'none' }}
          to={{
            pathname: "/details",
            state: { gameDetails }
          }}>

          <div className="game-content">
            <img className="game-icon" onError={this.addDefaultSrc} src={icon} alt="icon" />
            <p className="game-link"><strong>{gameTitle}</strong></p>
          </div>
        </Link>
      </div>
    );
  }

}

export default Game;