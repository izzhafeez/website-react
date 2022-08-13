import { useParams } from 'react-router-dom';

import experiencesData from '../data/experiences.json';
import logos from '../assets/logo-controller';

import Text from '../components/Text';
import MiniIcon from '../components/MiniIcon';

function ExperienceTemplate() {
  const { name } = useParams();
  const experience = experiencesData.experiences[name];
  const tools = experience.tools.map((tool) => {
    return <MiniIcon logo={logos[tool]} alt={tool}></MiniIcon>
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
    </div>
  );
}

export default ExperienceTemplate;