import { Link } from 'react-router-dom';

import './SmallPreview.css';

import logos from '../assets/logo-controller';

import MicroIcon from './MicroIcon';

function Note(props) {
  return (
    <div className="preview">
      <div className="note-title">
        <MicroIcon logo={logos["nus"]} alt="NUS"></MicroIcon>
        <Link to={`../blog/notes/${props.note.course.toLowerCase()}/${props.note.topic}`}>
          {props.note.topic}
        </Link>
        {props.note.important && <star> ★</star>}
      </div>
      <div className="note-course">
        {props.note.course + " - " + props.note.date}
      </div>
    </div>
  );
}

export default Note;