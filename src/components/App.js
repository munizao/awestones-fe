import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Game from './Game';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>The Awesomeness Stones</h1>
          <Game></Game>
        </header>
      </div>    
    </BrowserRouter>
  );
}

export default App;
