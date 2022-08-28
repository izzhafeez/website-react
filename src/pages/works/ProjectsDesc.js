import { useParams } from 'react-router-dom';

import languagesData from '../../data/languages.json';
import projectsData from '../../data/projects.json';
import skillsData from '../../data/skills.json';
import toolsData from '../../data/tools.json';
import contentData from '../../data/content.json';
import logos from '../../assets/logo-controller';

import Text from '../../components/Text';
import MiniIcon from '../../components/icon/MiniIcon';

function ProjectsDesc() {
  const { name } = useParams();
  const isAll = name === "all";
  const projects = isAll
    ? Object.values(projectsData.projects)
    : [projectsData.projects[name]];
  
  const projectsContent = projects.filter(project => project.tools).map(project => {
    const tools = project.tools.map((tool) => {
      const toolData = toolsData.tools[tool];
      return <MiniIcon logo={logos[toolData.img]} alt={tool} kind="tools" key={tool}></MiniIcon>
    });
    const skills = project.skills.map((skill) => {
      const skillData = skillsData.skills[skill];
      return <MiniIcon logo={logos[skillData.img]} alt={skill} kind="skills" key={skill}></MiniIcon>
    });
    const languages = project.languages.map((language) => {
      const languageData = languagesData.languages[language];
      return <MiniIcon logo={logos[languageData.img]} alt={language} kind="languages" key={language}></MiniIcon>
    });

    const site = project.link
      ? ["link", project.link, "LINK"]
      : ["link", project.repo, "LINK", true];

    const className = isAll ? "" : "page";

    return (
      <div className={className}>
        <img src={logos[project.img]} alt={project.title} className="icon"></img>
        <br></br>
        <Text
          title={project.title.toUpperCase()}
          content={project["full-description"]}
        ></Text>

        <Text
          title="REPOSITORY"
          content={
            [
              [
                site
              ]
            ]
          }
        ></Text>

        <Text
          title="DURATION"
          content={[[project.start+ " - " +project.end]]}
        ></Text>
        <h2>TOOLS</h2>
        <div className="mini-icon-section">{tools}</div>
        <br></br>
        <h2>LANGUAGES</h2>
        <div className="mini-icon-section">{languages}</div>
        <br></br>
        <h2>SKILLS</h2>
        <div className="mini-icon-section">{skills}</div>
        <br></br>
        <br></br>
      </div>
    );
  });

  return (
    <div className="page">
      {
        isAll &&
        <Text
          title="ALL PROJECTS"
          content={contentData.projects.content}
        ></Text>
      }
      <br></br>
      {projectsContent}
    </div>
  )
}

export default ProjectsDesc;