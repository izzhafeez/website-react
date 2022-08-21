import './Blog.css';

import contentData from '../data/content.json';
import modulesData from '../data/modules.json';
// import notesData from '../data/notes.json';

import Text from '../components/Text.js';
import Module from '../components/Module.js';
// import Note from '../components/Note.js';

import desmosito from '../assets/desmosito.png';

function BlogHome() {
  const modulesPreview = Object.keys(modulesData.modules).slice(0, 6).map((key, module) => {
    const moduleData = modulesData.modules[key];
    moduleData["key"] = key;
    return (
      <Module
        module={moduleData}
      ></Module>
    );
  });
  return (
    <div className="page">
      <img src={desmosito} alt="Logo" className="icon"></img>
      <Text
        title={contentData.blog.title}
        content={contentData.blog.content}
      ></Text>
      <br></br>
      <h2 id="modules">MODULE REVIEWS</h2>
      <div className="notes-entries">{modulesPreview}</div>
      <br></br>
    </div>
  );
}

export default BlogHome;