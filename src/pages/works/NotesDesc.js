import { useParams } from 'react-router-dom';

import '../blog/Blog.css';

import notesData from '../../data/notes.json';
import logos from '../../assets/logo-controller';

import Note from '../../components/works/Note';
import Text from '../../components/Text';

function NotesDesc(props) {
  const { name } = useParams();
  const datas = name === "all"
    ? Object.values(notesData.notes)
    : [notesData.notes[name]];

  const notesContent = datas.map(data => {
    const parents = data.parents;

    const parentLinks = parents.map(parent => {
      if (parent in notesData.notes) return <Note note={notesData.notes[parent]}/>;
      return "";
    });

    const contents = Object.keys(data.contents).map((key, _) => {
      const content = data.contents[key];
      const sublinks = content.sublinks;

      const sublinkLinks = sublinks.map(sublink => {
        if (sublink in notesData.notes) return <Note note={notesData.notes[sublink]}/>;
        return "";
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
      <div>
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
        <br></br>
        <br></br>
      </div>
    );
  });
  return (
    <div className="page">
      {notesContent}
    </div>
  );
}

export default NotesDesc;