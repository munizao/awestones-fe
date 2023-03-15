import React from 'react';
import Die from './Die';

const DiceBox = ({room, dice}) => {
  console.log("DiceBox dice", dice[0], dice[1]);
  const d1 = {room, face:dice[0], die:0};
  const d2 = {room, face:dice[1], die:1};
  return (
    <div>
      Dice: 
      <Die {...d1}></Die>, 
      <Die {...d2}></Die>     
    </div>
  );
}

export default DiceBox;