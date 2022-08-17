import { Link, useParams } from 'react-router-dom';

import awardsData from '../data/awards.json';
import certificatesData from '../data/certificates.json';
import languagesData from '../data/languages.json';
import skillsData from '../data/skills.json';
import toolsData from '../data/tools.json';
import logos from '../assets/logo-controller';

import Text from '../components/Text';

function MeritsDescriptionTemplate(props) {
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

  return (
    <div className="page">
      <img src={logos[data.img]} alt={data.title} className="icon"></img>
      <br></br>
      <Text
        title={data.title.toUpperCase()}
        content={data.description}
      ></Text>
      {data.projects && <h2><Link to={`../works/projects/search/${name}`}>PROJECTS</Link></h2>}
    </div>
  );
}

export default MeritsDescriptionTemplate;