import { Link } from 'react-router-dom';

import './Project.css';

import languagesData from '../data/languages.json';
import toolsData from '../data/tools.json';

function Project(props) {
  const languages = props.project.languages.map((language) => {
    const languageData = languagesData.languages[language];
    return (
      <span>
        <Link to={`../merits/languages/details/${language}`}>{languageData.title}</Link>
        &nbsp;
      </span>
    )
  });
  const tools = props.project.tools.map((tool) => {
    const toolData = toolsData.tools[tool];
    return (
      <span>
        <Link to={`../merits/tools/details/${tool}`}>{toolData.title}</Link>
        &nbsp;
      </span>
    )
  });
  const merits = [...languages.slice(0, 4), ...tools.slice(0, 4)].slice(0, 6);
  return (
    <div className="project">
      <div className="project-duration">{props.project.start} - {props.project.end}</div>
      <div className="project-title">
        <Link to={`../works/projects/${props.project.key}`}>
          {props.project.title}
        </Link>
        {props.project.starred && <star> ★</star>}
      </div>
      <div className="project-description">{props.project.description}</div>
      <div className="project-merits">{merits}</div>
    </div>
  );
}

export default Project;