import React from 'react';
import useClient from '../hooks/useClient';
import useRoom from '../hooks/useRoom';

const AbandonButton = () => {
  const room = useRoom(useClient());
  return (
    <div onClick={()=>{
        room.send("abandon");
      }}>
      Abandon Game
    </div>
  )
};

export default AbandonButton;