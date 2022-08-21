import { useParams } from 'react-router-dom';

import './Blog.css';

import modulesData from '../data/modules.json';
import notesData from '../data/notes.json';
import logos from '../assets/logo-controller';

import Module from '../components/Module';

function BlogLanding(props) {
  const dataDict = {
    modules: modulesData,
    notes: notesData
  }

  const params = useParams();
  const kind = params.kind;
  const data = dataDict[kind][kind];

  const blogs = Object.keys(data).map((key, _) => {
    const blog = data[key];
    blog["key"] = key;

    switch (kind) {
      case ("modules"):
        return blog.ignore ? null : <Module module={blog}/>;
      default:
        return;
    }
    
  });
  return (
    <div className="page">
      <img src={logos["nus"]} alt={kind} className="icon"></img>
      <br></br>
      <h2>{kind.toUpperCase()}</h2>
      <div className="blog-entries">{blogs}</div>
    </div>
  )
}

export default BlogLanding;