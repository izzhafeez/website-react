import { Link } from 'react-router-dom';

import '../SmallPreview.css';

import logos from '../../assets/logo-controller';

import MicroIcon from '../icon/MicroIcon';

function Note(props) {
  return (
    <div className="preview">
      <div className="note-title">
        <MicroIcon logo={logos["nus"]} alt="NUS"></MicroIcon>
        <Link to={`../works/notes/${props.note.course.toLowerCase()}/${props.note.topic}`}>
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