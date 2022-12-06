import React from 'react';
import useClient from '../hooks/useClient';
import useRoom from '../hooks/useRoom';
import StatusMessage from './StatusMessage';
import Game from './Game';
import Lobby from './Lobby';

const Frame = () => {
  const {createRoom, joinRoom, players, room, playerId} = useRoom(useClient());
  return (
    <div>
      {/* <StatusMessage room={room}></StatusMessage> */}
      {playerId !== -1 ? <Game room={room} players={players} playerId={playerId}></Game> : <Lobby createRoom={createRoom} joinRoom={joinRoom}></Lobby>}
    </div>
  )
}

export { Frame };