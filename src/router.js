import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/Home';

import MeritsHome from './pages/merits/MeritsHome';
import MeritsDesc from './pages/merits/MeritsDesc';
import MeritsLanding from './pages/merits/MeritsLanding';
import ExperienceDesc from './pages/merits/ExperienceDesc';

import WorksHome from './pages/works/WorksHome';
import NotesLanding from './pages/works/NotesLanding';
import NotesDesc from './pages/works/NotesDesc';
import ProjectsDesc from './pages/works/ProjectsDesc';
import ProjectsLanding from './pages/works/ProjectsLanding';

import BlogHome from './pages/blog/BlogHome';
import BlogLanding from './pages/blog/BlogLanding';
import ModulesDesc from './pages/blog/ModulesDesc';
 
const router = (
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="website-react" exact element={<Home />} />
    <Route path="merits" exact element={<MeritsHome />} />
    <Route path="blog" exact element={<BlogHome />} />
    <Route path="works" exact element={<WorksHome />} />

    <Route path="merits/experience/:name" exact element={<ExperienceDesc />} />

    <Route path="merits/:kind" exact element={<MeritsLanding/>} />

    <Route path="merits/awards/:name" exact element={<MeritsDesc dataPath="awards"/>} />
    <Route path="merits/certificates/:name" exact element={<MeritsDesc dataPath="certificates"/>} />
    <Route path="merits/languages/:name" exact element={<MeritsDesc dataPath="languages"/>} />
    <Route path="merits/skills/:name" exact element={<MeritsDesc dataPath="skills"/>} />
    <Route path="merits/tools/:name" exact element={<MeritsDesc dataPath="tools"/>} />

    <Route path="blog/:kind" exact element={<BlogLanding/>} />

    <Route path="blog/modules/:name" exact element={<ModulesDesc/>} />

    <Route path="works/notes/:module/:name" exact element={<NotesDesc/>} />
    <Route path="works/notes/search/:searchTerm" exact element={<NotesLanding/>} />
    <Route path="works/notes/search" exact element={<NotesLanding/>} />
    <Route path="works/projects" exact element={<ProjectsLanding/>} />
    <Route path="works/projects/:name" exact element={<ProjectsDesc/>} />

    <Route
      path="full-page"
      exact element={
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
);

export default router;