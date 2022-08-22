import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';
import './components/Icon.css';
import Navbar from './components/Navbar.js';

import Home from './pages/Home';

import MeritsHome from './pages/MeritsHome';
import MeritsDesc from './pages/MeritsDesc';
import MeritsLanding from './pages/MeritsLanding';
import ExperienceDesc from './pages/ExperienceDesc';

import WorksHome from './pages/WorksHome';
import ProjectsDesc from './pages/ProjectsDesc';
import ProjectsLanding from './pages/ProjectsLanding';

import BlogHome from './pages/BlogHome';
import BlogLanding from './pages/BlogLanding';
import ModulesDesc from './pages/ModulesDesc';
import NotesLanding from './pages/NotesLanding';
import NotesDesc from './pages/NotesDesc';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content-container">
        <div className="content-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="website-react" element={<Home />} />
            <Route path="merits" element={<MeritsHome />} />
            <Route path="blog" element={<BlogHome />} />
            <Route path="works" element={<WorksHome />} />

            <Route path="merits/experience/:name" element={<ExperienceDesc />} />

            <Route path="merits/:kind" element={<MeritsLanding/>} />

            <Route path="merits/awards/:name" element={<MeritsDesc dataPath="awards"/>} />
            <Route path="merits/certificates/:name" element={<MeritsDesc dataPath="certificates"/>} />
            <Route path="merits/languages/:name" element={<MeritsDesc dataPath="languages"/>} />
            <Route path="merits/skills/:name" element={<MeritsDesc dataPath="skills"/>} />
            <Route path="merits/tools/:name" element={<MeritsDesc dataPath="tools"/>} />

            <Route path="blog/:kind" element={<BlogLanding/>} />

            <Route path="blog/modules/:name" element={<ModulesDesc/>} />

            <Route path="works/notes/:module/:name" element={<NotesDesc/>} />
            <Route path="works/notes/search/:searchTerm" element={<NotesLanding/>} />
            <Route path="works/notes/search" element={<NotesLanding/>} />
            <Route path="works/projects" element={<ProjectsLanding/>} />
            <Route path="works/projects/:name" element={<ProjectsDesc/>} />

            <Route
              path="full-page"
              element={
                <div>
                  <Home></Home>
                  <br></br>
                  <br></br>
                  <br></br>
                  <MeritsHome></MeritsHome>
                  <br></br>
                  <br></br>
                  <br></br>
                  <WorksHome></WorksHome>
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
