import { Link } from 'react-router-dom';

import './Experience.css';

function Experience(props) {
  return (
    <div className="experience">
      <div className="experience-duration">{props.merit.start} - {props.merit.end}</div>
      <div className="experience-title">
        <Link to={`../merits/experience/${props.merit.key}`}>
          {props.merit.title}
        </Link>
        {props.merit.starred && <star> ★</star>}
      </div>
      <div className="experience-organization">{props.merit.organization}</div>
      <div className="experience-description">{props.merit.description}</div>
    </div>
  );
}

export default Experience;