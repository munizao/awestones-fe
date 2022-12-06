import React from 'react';
import Dice from './Dice';
import StoneBox from './StoneBox';
import AbandonButton from './AbandonButton';
import StatusMessage from './StatusMessage';


const Game = ({room, playerId}) => {
  console.log("Game room", room);
  console.log("Game room.state", room?.state);
  console.log("Game room.state.onChange", room?.state?.onChange);
  console.log("Player ID", playerId);
  console.log("Players", room?.state?.players);
  console.log("Player count", room?.state?.players?.length);
  // console.log("Game players player count", players.length);
  // console.log("Game players", players);
  if (room && room.state && room.state.players.length === 2) {
    console.log("room game.js", room);
    console.log("player map size", room.state.playerSessionMap.size);
    console.log("room.sessionId", room.sessionId);
    const selfPlayer = room.state.players[playerId];
    console.log("selfPlayer", selfPlayer);
    const otherPlayer = room.state.players[(playerId + 1) % 2];
    return (
      <div>
        <StoneBox stones={otherPlayer.stones}>Opponent's Stones</StoneBox>
        <StoneBox stones={room.state.potStones}>Unclaimed Stones</StoneBox>
        <StoneBox stones={selfPlayer.stones}>Your Stones</StoneBox>
        <Dice dice={room.state.dice}></Dice>
        <AbandonButton></AbandonButton>
      </div>
    )
  }
  else {
    return (
      <StatusMessage room={room}></StatusMessage>
    );
  }
}

export default Game;