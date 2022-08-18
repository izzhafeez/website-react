import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';
import './components/Icon.css';
import Navbar from './components/Navbar.js';

import Home from './pages/Home';

import Merits from './pages/Merits';
import MeritsDescTemplate from './pages/MeritsDescTemplate';
import MeritsTemplate from './pages/MeritsTemplate';
import ExperienceDescTemplate from './pages/ExperienceDescTemplate';

import Works from './pages/Works';
import ProjectsDescTemplate from './pages/ProjectsDescTemplate';
import ProjectsTemplate from './pages/ProjectsTemplate';

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
            <Route path="works" element={<Works />} />

            <Route path="merits/experience/:name" element={<ExperienceDescTemplate />} />

            <Route path="merits/:kind" element={<MeritsTemplate/>} />

            <Route path="merits/awards/:name" element={<MeritsDescTemplate dataPath="awards"/>} />
            <Route path="merits/certificates/:name" element={<MeritsDescTemplate dataPath="certificates"/>} />
            <Route path="merits/languages/:name" element={<MeritsDescTemplate dataPath="languages"/>} />
            <Route path="merits/skills/:name" element={<MeritsDescTemplate dataPath="skills"/>} />
            <Route path="merits/tools/:name" element={<MeritsDescTemplate dataPath="tools"/>} />

            <Route path="works/projects" element={<ProjectsTemplate/>} />
            <Route path="works/projects/:name" element={<ProjectsDescTemplate/>} />

            <Route
              path="full-page"
              element={
                <div>
                  <Home></Home>
                  <br></br>
                  <Merits></Merits>
                  <br></br>
                  <Works></Works>
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
