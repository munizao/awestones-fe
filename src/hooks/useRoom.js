import { useState, useEffect } from 'react';
// import Colyseus from 'colyseus.js';

const useRoom = (client) => {
  const [room, setRoom] = useState();
  const roomState = room?.state;
  useEffect(() => {
    // console.log(client);
    if (client && !room) {
      const roomId = localStorage.getItem("roomId");
      const sessionId = localStorage.getItem("sessionId");
      if (roomId && sessionId) {
        client.reconnect(roomId, sessionId).then(rm => {
          setRoom(rm);
          console.log("Reconnected successfully!");
        }).catch(e => {
          console.error("Error", e);
          localStorage.clear();
        });
      }
      else {
        client.joinOrCreate("awestones").then(rm => {
          localStorage.setItem("roomId", rm.id);
          localStorage.setItem("sessionId", rm.sessionId);
          setRoom(rm);
        }).catch(e => {
          console.log("JOIN ERROR", e);
        });
      }
    }
    return () => {
      if (room && room.connection) {
        room.connection.close();
      }
    }
  }, [client, room, roomState]);
  return room;
}

export default useRoom;