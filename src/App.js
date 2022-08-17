import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';
import './components/Icon.css';
import Navbar from './components/Navbar.js';

import Home from './pages/Home';

import Merits from './pages/Merits';
import MeritsDescriptionTemplate from './pages/MeritsDescriptionTemplate';
import MeritsTemplate from './pages/MeritsTemplate';
import ExperienceTemplate from './pages/ExperienceTemplate';

import Works from './pages/Works';
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

            <Route path="merits/experience/:name" element={<ExperienceTemplate />} />

            <Route path="merits/awards/:name" element={<MeritsTemplate dataPath="awards"/>} />
            <Route path="merits/certificates/:name" element={<MeritsTemplate dataPath="certificates"/>} />
            <Route path="merits/languages/:name" element={<MeritsTemplate dataPath="languages"/>} />
            <Route path="merits/tools/:name" element={<MeritsTemplate dataPath="tools"/>} />
            <Route path="merits/skills/:name" element={<MeritsTemplate dataPath="skills"/>} />

            <Route path="merits/awards/details/:name" element={<MeritsDescriptionTemplate dataPath="awards"/>} />
            <Route path="merits/certificates/details/:name" element={<MeritsDescriptionTemplate dataPath="certificates"/>} />
            <Route path="merits/languages/details/:name" element={<MeritsDescriptionTemplate dataPath="languages"/>} />
            <Route path="merits/skills/details/:name" element={<MeritsDescriptionTemplate dataPath="skills"/>} />
            <Route path="merits/tools/details/:name" element={<MeritsDescriptionTemplate dataPath="tools"/>} />

            <Route path="works/projects/:name" element={<ProjectsTemplate/>} />

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
