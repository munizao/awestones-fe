import React from 'react';
import useClient from '../hooks/useClient';
import useRoom from '../hooks/useRoom';
import Dice from './Dice';
import StoneBox from './StoneBox';

const Game = () => {
  const room = useRoom(useClient());
  if (room && room.state && room.state.playerSessionMap.size) {
    console.log("room game.js", room);
    console.log("player map size", room.state.playerSessionMap.size);
    const selfPlayer = room.state.playerSessionMap.get(room.sessionId);
    const otherPlayer = room.state.players[(selfPlayer.playerId + 1) % 2];
    return (
      <div>
        <StoneBox stones={otherPlayer.stones}>Opponent's Stones</StoneBox>
        <StoneBox stones={room.state.potStones}>Unclaimed Stones</StoneBox>
        <StoneBox stones={selfPlayer.stones}>Your Stones</StoneBox>
        <Dice></Dice>
      </div>
    )
  }
  else {
    return null;
  }
}

export default Game;