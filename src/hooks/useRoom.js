import { useState, useEffect } from 'react';
import usePlayers from './usePlayers';
// import Colyseus from 'colyseus.js';

const useRoom = (client) => {
  const [room, setRoom] = useState({});
  const [playerId, setPlayerId] = useState(-1);
  const [update, setUpdate] = useState(0);
  const players = usePlayers(room);
  const roomId = room?.id;
  const playerCount = room?.state?.players?.length;
  const createArrayListener = (field) => {
    console.log("createArrayListener: ", field);
    room.state[field].onChange = (array, key) => {
      console.log("room.state." + field + ".onChange");
      // console.log("**room.id", room.id);
      console.log("**" + field, array, "has changes at", key);
      setUpdate(update + 1);
    }
  }

  
  if (room && room.state) {
    room.state.onChange = (changes) => {
      setUpdate(update + 1);
    };
    createArrayListener("dice");
    createArrayListener("potStones");
    createArrayListener("matches");
  }

  useEffect(() => {
    console.log("UseRoom -> UseEffect -> roomId", roomId);
    return () => {
      if (room && room.connection) {
        console.log("useRoom cleanup step", roomId);
        // room.connection.close(); //TODO: make cleanup work right.
      }
    }
  // });
  }, [client, roomId, room, playerId, playerCount, update]);


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
      console.log("room.onStateChange dice", state?.dice[0], state?.dice[1]);
      // setRoom({...rm, state});
      // setRoom(rm);
    });

    // rm.state.dice.onStateChange
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