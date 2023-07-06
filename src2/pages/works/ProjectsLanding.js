import './Works.css';

import { Helmet } from 'react-helmet';

import projectsData from '../../data/projects.json';
import logos from '../../assets/logo-controller';

import Project from '../../components/works/Project';

function ProjectsLanding(props) {
  const dataPath = "projects";
  const dataDict = {
    projects: projectsData,
  }

  const data = dataDict[dataPath][dataPath];

  const projects = Object.keys(data).map((key, _) => {
    const project = data[key];
    project["key"] = key;
    project["kind"] = dataPath;
    return project.ignore ? null : <Project project={project}/>;
  });
  return (
    <div className="page">
      <img src={logos[dataPath]} alt={dataPath} className="icon"></img>
      <br></br>
      <h2>{dataPath.toUpperCase()}</h2>
      <div className="projects-entries">{projects}</div>
      <Helmet>
        <title>My Projects</title>
        <meta name="description"
          content="Welcome to my Projects Page! Here, I share some of the projects that I've done over the years, as well as my experiences in developing them." />
      </Helmet>
    </div>
  )
}

export default ProjectsLanding;