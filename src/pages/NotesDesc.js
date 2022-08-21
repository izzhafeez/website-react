import { useParams } from 'react-router-dom';

import './Blog.css';

import notesData from '../data/notes.json';
import logos from '../assets/logo-controller';

import Note from '../components/Note';
import Text from '../components/Text';

function NotesDesc(props) {
  const { name } = useParams();
  const data = notesData.notes[name];

  const parents = data.parents;

  const parentLinks = parents.map(parent => {
    if (!parent in notesData) return;
    return <Note note={notesData.notes[parent]}/>
  });

  const contents = Object.keys(data.contents).map((key, _) => {
    const content = data.contents[key];
    const sublinks = content.sublinks;

    const sublinkLinks = sublinks.map(sublink => {
      if (!sublink in notesData.notes) return;
      return <Note note={notesData.notes[sublink]}/>
    });

    return [
      <Text
        title={key.toUpperCase()}
        content={content.points.map(point => {
          if (point.match(/^<(.*?)\s.*?\1>$/g)) {
            const stripped = point.replace("<MA ", "").replace(" MA>", "");
            return [["span", "math", stripped]];
          }
          return [point];
        })}
      ></Text>,
      <div className="notes-entries">{sublinkLinks}</div>,
      <br></br>
    ]
  })

  return (
    <div className="page">
      <img src={logos.nus} alt={data.title} className="icon"></img>
      <br></br>
      <Text
        title={data.topic.toUpperCase()}
        content={
          [
            [
              "Module: ",
              ["link", "../blog/modules/"+data.course.toLowerCase(), data.course.toUpperCase()]
            ],
            ["Date: " + data.date]
          ]
        }
      ></Text>
      <h2>PARENT TOPICS</h2>
      <div className="notes-entries">{parentLinks}</div>
      <br></br>
      {contents}
    </div>
  );
}

export default NotesDesc;