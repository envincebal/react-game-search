import React from 'react';
import Game from './Game';

const GamesList = (props) => {
  return props.gamesList.map((game) => {
    return <Game
      key={game.id}
      game={game.name}
      icon={game.image.icon_url}
      gameTitle={game.name}
      gameDetails={game}
    />
  });
}

export default GamesList;