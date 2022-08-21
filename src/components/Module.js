import { Link } from 'react-router-dom';

import './SmallPreview.css';

import logos from '../assets/logo-controller';

import MicroIcon from './MicroIcon';

function Module(props) {
  return (
    <div className="preview">
      <div className="module-title">
        <MicroIcon logo={logos["nus"]} alt="NUS"></MicroIcon>
        {props.module.link &&
          <Link to={`../blog/modules`}>
            {props.module.title}
          </Link>
        }
        {!props.module.link &&
          <Link to={`../blog/modules/${props.module.key}`}>
            {props.module.title}
          </Link>
        }
        {props.module.starred && <star> ★</star>}
      </div>
      <div className="module-date">
        {props.module.code}
        &nbsp;
        <span className={
          props.module.grade.replace("+", "P").replace("-", "M")
        }>
          {
            !props.module.link &&
            "("+props.module.grade+")"
          }
        </span>
      </div>
    </div>
  );
}

export default Module;