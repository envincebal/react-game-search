import React from 'react';
import { Link } from "react-router-dom";
const Game = (props) => {
  const { icon, gameDetails, gameTitle } = props;
  return (
    <div className="games-container">
      <div className="game-box">
        <img src={icon} alt="icon" />
        <Link to="/details">
          <p><strong>{gameTitle}</strong></p>
        </Link>
      </div>
    </div>
  );
}

export default Game;