import React from 'react';

const AbandonButton = (room) => {
  return (
    <div onClick={()=>{
        room.send("abandon");
      }}>
      Abandon Game
    </div>
  )
};

export default AbandonButton;