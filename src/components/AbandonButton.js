import React from 'react';

const AbandonButton = ({room}) => {
  return (
    <div onClick={()=>{
        console.log(room);
        room.send("abandon", {});
      }}>
      Abandon Game
    </div>
  )
};

export default AbandonButton;