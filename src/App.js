import React from 'react';

import './App.css';
import './index.css';
import './components/icon/Icon.css';
import Navbar from './components/Navbar.js';

import router from './router';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content-container">
        <div className="content-section">
          {router}
        </div>
      </div>
    </div>
  );
}

export default App;
