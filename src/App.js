import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';
import './components/Icon.css';
import Navbar from './components/Navbar.js';

import Home from './pages/Home';
import Merits from './pages/Merits';
import MeritsTemplate from './pages/MeritsTemplate';
import ExperienceTemplate from './pages/ExperienceTemplate';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content-container">
        <div className="content-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="website-react" element={<Home />} />
            <Route path="merits" element={<Merits />} />
            <Route path="merits/experience/:name" element={<ExperienceTemplate />} />
            <Route path="merits/certificates/:name" element={<MeritsTemplate dataPath="certificates"/>} />
            <Route path="merits/languages/:name" element={<MeritsTemplate dataPath="languages"/>} />
            <Route path="merits/tools/:name" element={<MeritsTemplate dataPath="tools"/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
