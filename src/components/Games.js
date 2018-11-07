import React from 'react';

const Games = (props) => {
  return (
    <div className="games-content">
      <div className="games-container">
      <div className="game-box">
        <img src={props.icon} alt="icon" />
        <p><strong>{props.gameTitle}</strong></p>
      </div>
        
      </div>

    </div>
  );
}

export default Games;