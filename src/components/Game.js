import React from 'react';

const Game = (props) => {
  return (
    <div className="games-container">
      <div className="game-box">
        <img src={props.icon} alt="icon" />
        <p><strong>{props.gameTitle}</strong></p>
      </div>
    </div>
  );
}

export default Game;