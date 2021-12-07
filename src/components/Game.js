import React from 'react';
import useClient from '../hooks/useClient';
import useRoom from '../hooks/useRoom';

const Game = () => {
  const client = useClient();
  const room = useRoom(client);
  return (
    <div>
      Game goes here.
      {console.log(room, "room goes here")}
    </div>
  )
}

export default Game;