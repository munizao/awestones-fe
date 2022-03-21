import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Frame from './Frame';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>The Awesomeness Stones</h1>
          <Frame></Frame>
        </header>
      </div>    
    </BrowserRouter>
  );
}

export default App;
