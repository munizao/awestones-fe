import React from 'react';

const TurnIndicator = ({room, playerId}) => {
  const turnMessage = room.state.currentTurnPlayer === playerId ?
    "It is your turn." :
    "It is your opponent's turn.";

  return (
    <div>
      {turnMessage}
    </div>
  )
}

export default TurnIndicator;