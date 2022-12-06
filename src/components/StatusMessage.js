import React from 'react';
import {useEffect} from 'react';
import useClient from '../hooks/useClient';
import useRoom from '../hooks/useRoom';

const StatusMessage = ({room}) => {
  // const room = useRoom(useClient());
  const state = room?.state;
  const gameActive = room?.state?.gameActive;
  console.log("StatusMessage.js room.id", room?.id);
  useEffect(() => {
  }, [room, room?.id, state, gameActive]);
  let message = "Setting up...";
  if (state) {
    if (gameActive) {
      message = "Ready"
    }
    else {
      message = "Waiting for opponent to join using Game ID " + room.id + ".";
    }
  }

  return (
    <div>
      {message}
    </div>
  )
}

export default StatusMessage;