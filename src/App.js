import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrumMachine from './DrumMachine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>The Awesome Drum Machine!</h1>
      <DrumMachine />
    </div>
  );
}

export default App;
