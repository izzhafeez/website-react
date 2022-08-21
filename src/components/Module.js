import { Link } from 'react-router-dom';

import './Module.css';

import logos from '../assets/logo-controller';

import MicroIcon from './MicroIcon';

function Module(props) {
  return (
    <div className="module">
      <div className="module-title">
        <MicroIcon logo={logos["nus"]} alt="NUS"></MicroIcon>
        <Link to={`../blog/modules/${props.module.key}`}>
          {props.module.title}
        </Link>
        {props.module.starred && <star> ★</star>}
      </div>
      <div className="module-date">
        {props.module.code}&nbsp;({props.module.grade})
      </div>
    </div>
  );
}

export default Module;