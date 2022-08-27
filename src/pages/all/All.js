import React from 'react';

import { useParams } from 'react-router-dom';

import awardsData from '../../data/awards.json';
import certificatesData from '../../data/certificates.json';
import languagesData from '../../data/languages.json';
import skillsData from '../../data/skills.json';
import toolsData from '../../data/tools.json';
import modulesData from '../../data/modules.json';
import projectsData from '../../data/projects.json';
import logos from '../../assets/logo-controller';

import content from '../../data/content.json';
import Text from '../../components/Text.js';
import izzhafeez from '../../assets/izzhafeez.png';

function All() {
  const dataDict = {
    awards: awardsData,
    certificates: certificatesData,
    linkedin: certificatesData,
    hackerrank: certificatesData,
    languages: languagesData,
    skills: skillsData,
    tools: toolsData,
    modules: modulesData,
    projects: projectsData,
  }

  const params = useParams();
  const kind = params.kind;
  // const data = dataDict[kind][kind];

  return (
    <div className="page">
      <img src={izzhafeez} alt="Myself" className="icon"></img>
      <br></br>
      hello
    </div>
  );
}

export default All;