import { useState, useEffect } from 'react';
// import Colyseus from 'colyseus.js';

const useRoom = (client) => {
  const [room, setRoom] = useState();

  useEffect(() => {
    console.log(client);
    if (client && !room) {
      client.joinOrCreate("awestones").then(rm => {
        setRoom(rm);
        console.log(rm.sessionId, "joined", rm.name);
      }).catch(e => {
        console.log("JOIN ERROR", e);
      });
    }   
  }, [client, room]);
  
  return room;
}

export default useRoom;