import React from 'react';
import { Link } from "react-router-dom";

const Game = (props) => {
  const { icon, gameTitle, game } = props;
  return (
    <div className="games-container">
      <div className="game-box">
        <img src={icon} alt="icon" />
        <Link to={{
          pathname: "/details", 
          state: {game} }}>
          <p><strong>{gameTitle}</strong></p>
        </Link>
      </div>
    </div>
  );
}

export default Game;