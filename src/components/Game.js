import React from 'react';
import { Link } from "react-router-dom";

const Game = (props) => {
  const { icon, gameTitle, game } = props;
  return (
    <div className="game-box">
      <Link 
      style={{ textDecoration: 'none' }}
      to={{
        pathname: "/details",
        state: { game }
      }}>
        <div className="game-content">
          <img className="game-icon" src={icon} alt="icon" />

          <p className="game-link"><strong>{gameTitle}</strong></p>

        </div>
      </Link>
    </div>
  );
}

export default Game;