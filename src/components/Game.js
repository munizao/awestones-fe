import React from 'react';
import StoneBox from './StoneBox';
import AbandonButton from './AbandonButton';
import StatusMessage from './StatusMessage';
import DiceBox from './DiceBox';


const Game = ({room, playerId}) => {
  console.log("Game room", room);
  console.log("Game room.state", room?.state);
  console.log("Game room.state.onChange", room?.state?.onChange);
  console.log("Player ID", playerId);
  console.log("Players", room?.state?.players);
  console.log("Player count", room?.state?.players?.length);
  // console.log("Game players player count", players.length);
  // console.log("Game players", players);

  const active = (stones) => {

  }

  if (room && room.state && room.state.players.length === 2) {
    console.log("room game.js", room);
    console.log("player map size", room.state.playerSessionMap.size);
    console.log("room.sessionId", room.sessionId);
    const selfPlayer = room.state.players[playerId];
    console.log("selfPlayer", selfPlayer);
    const otherPlayer = room.state.players[(playerId + 1) % 2];
    return (
      <div>
        <GameMessage room={room}></GameMessage>
        <StoneBox room={room} stones={otherPlayer.stones} active={false}>Opponent's Stones</StoneBox>
        <StoneBox room={room} stones={room.state.potStones} active={false}>Unclaimed Stones</StoneBox>
        <StoneBox room={room} stones={selfPlayer.stones} active={false}>Your Stones</StoneBox>
        <DiceBox room={room} dice={room.state.dice}></DiceBox>
        <AbandonButton room={room}></AbandonButton>
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