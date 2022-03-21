import React from 'react';
import useClient from '../hooks/useClient';
import useRoom from '../hooks/useRoom';
import AbandonButton from './AbandonButton';
import StatusMessage from './StatusMessage';
import Game from './Game';

const Frame = () => {
  // const room = useRoom(useClient());
  return (
    <div>
      <StatusMessage></StatusMessage>
      Game goes here.
      <Lobby></Lobby>
      <Game></Game>
      
      <AbandonButton></AbandonButton>
      {/* {console.log("game room", room)} */}
    </div>
  )
}

export default Frame;