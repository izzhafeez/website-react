import { useParams } from 'react-router-dom';

import experiencesData from '../data/experiences.json';
import languagesData from '../data/languages.json';
import skillsData from '../data/skills.json';
import toolsData from '../data/tools.json';
import logos from '../assets/logo-controller';

import Text from '../components/Text';
import MiniIcon from '../components/MiniIcon';

function ExperienceDescTemplate() {
  const { name } = useParams();
  const experience = experiencesData.experiences[name];
  const tools = experience.tools.map((tool) => {
    const toolData = toolsData.tools[tool];
    return <MiniIcon logo={logos[toolData.img]} alt={tool} kind="tools"></MiniIcon>
  });
  const skills = experience.skills.map((skill) => {
    const skillData = skillsData.skills[skill];
    return <MiniIcon logo={logos[skillData.img]} alt={skill} kind="skills"></MiniIcon>
  });
  const languages = experience.languages.map((language) => {
    const languageData = languagesData.languages[language];
    return <MiniIcon logo={logos[languageData.img]} alt={language} kind="languages"></MiniIcon>
  });
  return (
    <div className="page">
      <img src={logos[experience.img]} alt={experience.organization} className="icon"></img>
      <br></br>
      <Text
        title={experience.title.toUpperCase()}
        content={experience["full-description"]}
      ></Text>

      <Text
        title="ORGANIZATION"
        content={[[experience.organization]]}
      ></Text>

      <Text
        title="DURATION"
        content={[[experience.start+ " - " +experience.end]]}
      ></Text>
      <h2>TOOLS</h2>
      <div className="mini-icon-section">{tools}</div>
      <br></br>
      <h2>SKILLS</h2>
      <div className="mini-icon-section">{skills}</div>
      <br></br>
      <h2>LANGUAGES</h2>
      <div className="mini-icon-section">{languages}</div>
    </div>
  );
}

export default ExperienceDescTemplate;