import { Link } from 'react-router-dom';

import './Experience.css';

function Experience(props) {
  return (
    <div className="experience">
      <div className="experience-duration">{props.experience.start} - {props.experience.end}</div>
      <div className="experience-title">
        <Link to={props.experience.link}>
          {props.experience.title}
        </Link>
        {props.experience.starred && <star> ★</star>}
      </div>
      <div className="experience-organization">{props.experience.organization}</div>
      <div className="experience-description">{props.experience.description}</div>
    </div>
  );
}

export default Experience;