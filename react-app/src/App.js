import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /**  Test Comment **/ 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React
        </a>
      </header>
    </div>
  );
}

export default App;
