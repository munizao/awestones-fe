import React from 'react';
import useClient from '../hooks/useClient';

const Lobby = () => {
  return (
    <div>
      <p>To obtain unlimited power, you must collect a complete set of the 
        Awesomeness Stones before your archrival does. 
        But beware, if you hold all of one type, they will explode, 
        annihilating your mortal form! {'('}That's all I've got.{')'}
      </p>
      <ul>
        <li>Create new game. {'('}You will be the first player.{')'}</li>
        <li>Join a game somebody else has created by pasting their game ID: <input></input></li>
      </ul>
    </div>
  );
}