import { useParams } from 'react-router-dom';

import './Works.css';

import modulesData from '../data/modules.json';
import logos from '../assets/logo-controller';

import Text from '../components/Text';

function ModulesDescTemplate(props) {
  const { name } = useParams();
  const data = modulesData.modules[name];
  const description = [...data.description];
  description.push(["DATE: " + data.date]);
  description.push(["GRADE: " + data.grade]);

  return (
    <div className="page">
      <img src={logos.nus} alt={data.title} className="icon"></img>
      <br></br>
      <Text
        title={data.code.toUpperCase() + " " + data.title.toUpperCase()}
        content={description}
      ></Text>
      <Text
        title="TIPS"
        content={data.tips}
      ></Text>
    </div>
  );
}

export default ModulesDescTemplate;