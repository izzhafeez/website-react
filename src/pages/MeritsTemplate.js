import { useParams } from 'react-router-dom';

import './Merits.css';

import certificatesData from '../data/certificates.json';
import languagesData from '../data/languages.json';
import toolsData from '../data/tools.json';
import logos from '../assets/logo-controller';

import Merit from '../components/Merit';

function MeritsTemplate(props) {
  const dataPath = props.dataPath;
  const dataDict = {
    certificates: certificatesData,
    languages: languagesData,
    tools: toolsData
  }
  const data = dataDict[dataPath];

  const { name } = useParams();

  const merits = data[name].filter(data => !data.ignore).map((merit) => {
    return <Merit merit={merit}/>
  });
  return (
    <div className="page">
      <img src={logos[name]} alt={name} className="icon"></img>
      <br></br>
      <h2>{name.toUpperCase()}</h2>
      <div className="merits-entries">{merits}</div>
    </div>
  )
}

export default MeritsTemplate;