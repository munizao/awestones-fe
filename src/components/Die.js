import React from 'react';

const Die = ({room, face, die}) => {
  if (room) {
    return (
      <div onClick={() => room.send("select-die", die)}>
        {face}
        {/* <img src={stoneIconSrcs[i]} alt={"TODO"} */}
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