import { useParams } from 'react-router-dom';

import '../works/Works.css';

import awardsData from '../../data/awards.json';
import certificatesData from '../../data/certificates.json';
import languagesData from '../../data/languages.json';
import projectsData from '../../data/projects.json';
import skillsData from '../../data/skills.json';
import toolsData from '../../data/tools.json';
import logos from '../../assets/logo-controller';

import Project from '../../components/works/Project';
import Text from '../../components/Text';

function MeritsDesc(props) {
  const dataPath = props.dataPath;
  const dataDict = {
    awards: awardsData,
    certificates: certificatesData,
    languages: languagesData,
    skills: skillsData,
    tools: toolsData
  }

  const { name } = useParams();
  const data = dataDict[dataPath][dataPath][name];

  const projects = Object.keys(
      projectsData.projects
    ).filter(
      (key, _) => {
        const projectData = projectsData.projects[key][dataPath];
        return projectData && projectData.includes(name);
      }
    ).map(
      (key, _) => {
        const projectData = projectsData.projects[key];
        projectData["key"] = key;
        return <Project project={projectData}></Project>;
      }
    );

  return (
    <div className="page">
      <img src={logos[data.img]} alt={data.title} className="icon"></img>
      <br></br>
      <Text
        title={data.title.toUpperCase()}
        content={data.description}
      ></Text>
      <h2>PROJECTS</h2>
      <div className="projects-entries">{projects}</div>
    </div>
  );
}

export default MeritsDesc;