import { useState, useEffect } from 'react';
import usePlayers from './usePlayers';
// import Colyseus from 'colyseus.js';

const useRoom = (client) => {
  const [room, setRoom] = useState({});
  const [playerId, setPlayerId] = useState(-1);
  const players = usePlayers(room);
  const roomId = room?.id;
  const playerCount = room?.state?.players?.length;
  useEffect(() => {
    console.log("UseRoom -> UseEffect -> roomId", roomId);
    return () => {
      if (room && room.connection) {
        console.log("closing connection for", roomId);
        // room.connection.close();
      }
    }
  // });
  }, [client, roomId, room, playerId, playerCount]);


  const setupRoom = (rm) => {
    console.log("setupRoom room.id", rm?.id);
    localStorage.setItem("roomId", rm.id);
    localStorage.setItem("sessionId", rm.sessionId);
    // rm.state.onChange = (changes) => {
    //   console.log("rm.state.onChange changes", changes);
    //   const newRoom = {...rm}
    //   changes.forEach(change => {
    //       newRoom[change.field] = change.value
    //       console.log("change", change.field, change.value);
    //       // console.log(change.previousValue);
    //   });
    //   setRoom(newRoom);
    // };

    rm.onStateChange((state) => {
      console.log("room.onStateChange state", state);
      console.log("room.onStateChange player count", state?.players.length);
      // setRoom({...rm, state});
      // setRoom(rm);
    });
    setRoom(rm);
  }
  const joinRoom = (roomId) => {
    client.joinById(roomId).then(rm => {
      console.log("Joining room: ", rm);
      setPlayerId(1);
      setupRoom(rm);
    }).catch(e => {
      console.log("Error joining room", e);
    });
  }

  const createRoom = () => {
    client.create("awestones").then(rm => {
      console.log("Creating room", rm);
      setPlayerId(0);
      setupRoom(rm);
    }).catch(e => {
      console.log("Error creating room", e);
    });
  }
  
  return {room, joinRoom, createRoom, playerId};
}

export default useRoom;