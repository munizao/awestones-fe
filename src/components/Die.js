import React from 'react';
import './Die.css';
const icons =  [import(require('../assets/dice-action-put-1.svg')), 
                import(require('../assets/dice-action-take-1.svg'))];

const Die = ({room, face, die}) => {
  const selectedClass = room.state.selectedDie === die ?
    "selected" :
    null;

  if (room) {
    return (
      <div className={selectedClass} onClick={() => room.send("select-die", die)}>
        {face}
        {/* <img src={dieIconSrcs[i]} alt={"TODO"} */}
      </div>
    );
  }
  else {
    return (
      <div>
        placeholder-die
      </div>
    )
  }
}

export default Die;