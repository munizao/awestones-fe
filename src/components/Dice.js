import React from 'react';
import useClient from '../hooks/useClient';
import useRoom from '../hooks/useRoom';

const Dice = () => {
  const room = useRoom(useClient());
  if (room && room.state) {
    return (
      <div>
        Dice: {room.state.dice[0]}, {room.state.dice[1]}
      </div>
    );
  }
  else {
    return null;
  }
}

export default Dice;