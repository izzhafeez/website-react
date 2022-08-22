import { useParams } from 'react-router-dom';

import './Merits.css';

import awardsData from '../../data/awards.json';
import certificatesData from '../../data/certificates.json';
import languagesData from '../../data/languages.json';
import skillsData from '../../data/skills.json';
import toolsData from '../../data/tools.json';
import logos from '../../assets/logo-controller';

import Merit from '../../components/merits/Merit';

function MeritsLanding(props) {
  // const dataPath = props.dataPath;
  const dataDict = {
    awards: awardsData,
    certificates: certificatesData,
    linkedin: certificatesData,
    hackerrank: certificatesData,
    languages: languagesData,
    skills: skillsData,
    tools: toolsData
  }

  const params = useParams();
  const kind = params.kind;
  const data = dataDict[kind][kind];

  const merits = Object.keys(data).map((key, _) => {
    const merit = data[key];
    merit["key"] = key;
    merit["kind"] = kind;
    return merit.ignore ? null : <Merit merit={merit}/>;
  });
  return (
    <div className="page">
      <img src={logos[kind]} alt={kind} className="icon"></img>
      <br></br>
      <h2>{kind.toUpperCase()}</h2>
      <div className="merits-entries">{merits}</div>
    </div>
  )
}

export default MeritsLanding;