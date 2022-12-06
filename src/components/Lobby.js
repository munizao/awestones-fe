import React, {useState} from 'react';

const Lobby = ({ createRoom, joinRoom }) => {
  const [gameID, setGameID] = useState('');
  return (
    <div>
      <p>To obtain unlimited power, you must collect a complete set of the 
        Awesomeness Stones before your archrival does. 
        But beware, if you hold all of one type, they will explode, 
        annihilating your mortal form! {'('}That's all I've got.{')'}
      </p>
      <ul>
        <li><button onClick={createRoom}>Create new game.</button> {'('}You will be the first player.{')'}</li>
        <li>Join a game somebody else has created: 
          <input type="text" 
          value={gameID} 
          onChange={({ target }) => setGameID(target.value)} 
          placeholder="Paste game id here"></input> 
          <button onClick={() => joinRoom(gameID)}>Join</button></li>
      </ul>
    </div>
  );
}

export default Lobby;