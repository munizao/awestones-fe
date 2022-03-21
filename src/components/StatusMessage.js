import React from 'react';
import {useEffect} from 'react';
import useClient from '../hooks/useClient';
import useRoom from '../hooks/useRoom';

const StatusMessage = () => {
  const room = useRoom(useClient());
  const state = room?.state;
  const gameActive = room?.state?.gameActive;
  useEffect(() => {
  }, [room, state, gameActive]);
  let message = "Setting up...";
  if (state) {
    if (gameActive) {
      message = "Ready"
    }
    else {
      message = "Waiting for opponent";
    }
  }

  return (
    <div>
      {message}
    </div>
  )
}

export default StatusMessage;