import { useState, useEffect } from 'react';

const usePlayers = (room) => {
  let players = {};
  const [update, setUpdate] = useState(0);
  if (room && room.state) {
    players = room.state.players;
    console.log("usePlayers", room.state.players);


    room.state.players.onAdd = (player, key) => {
      console.log("room.state.players.onAdd")
      console.log("**room.id", room.id);
      console.log("**player", player, "has changes at", key);
      setUpdate(update + 1);
      player.triggerAll();
    }

    room.state.players.onChange = (player, key) => {
      console.log("room.state.players.onChange")
      console.log("**room.id", room.id);
      console.log("**player", player, "has changes at", key);
      setUpdate(update + 1);
    }

    
  }
  useEffect(() => {
    console.log("usePlayers -> useEffect -> update", update)
  }, [update]);
  return players;
}

export default usePlayers;