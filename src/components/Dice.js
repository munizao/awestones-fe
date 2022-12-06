import React from 'react';
import useClient from '../hooks/useClient';
import useRoom from '../hooks/useRoom';

const Dice = (dice) => {
  return (
    <div>
      Dice: {dice[0]}, {dice[1]}
    </div>
  );
}

export default Dice;