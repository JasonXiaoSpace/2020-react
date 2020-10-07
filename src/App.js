import React from 'react';
import logo from './logo.svg';
import './App.less';

function App() {
  return (
    <div className="app">
      <div className="outer">
        <div className='container'>
          <img src={logo} className="app-logo" alt="logo" />
          <div className='mask'></div>
        </div>

        <p className="app-name">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
