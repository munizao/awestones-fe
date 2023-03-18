import React from 'react';
import StoneBox from './StoneBox';
import AbandonButton from './AbandonButton';
import StatusMessage from './StatusMessage';
import DiceBox from './DiceBox';
import TurnIndicator from './TurnIndicator';


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
    const otherPlayerId = (playerId + 1) % 2;
    const otherPlayer = room.state.players[otherPlayerId];
    const pot = -1;
    const activeStones = (stonesOwner) => {
      if (room.state.currentStep.direction === "take" &&
          room.state.currentStep.playerId === playerId &&
          stonesOwner === pot) {
            return true;
          }
      if (room.state.currentStep.direction === "put" &&
          room.state.currentStep.playerId === playerId &&
          stonesOwner === playerId) {
        return true;
      }  
      return false;
    }

    return (
      <div>
        <TurnIndicator room={room} playerId={playerId}></TurnIndicator>
        {/* <GameMessage room={room}></GameMessage> */}
        <StoneBox room={room} stones={otherPlayer.stones} active={activeStones(otherPlayerId)}>Opponent's Stones</StoneBox>
        <StoneBox room={room} stones={room.state.potStones} active={activeStones(pot)}>Unclaimed Stones</StoneBox>
        <StoneBox room={room} stones={selfPlayer.stones} active={activeStones(playerId)}>Your Stones</StoneBox>
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