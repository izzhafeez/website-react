import React from 'react';

import content from '../data/content.json';
import Text from '../components/Text.js';
import izzhafeez from '../assets/izzhafeez.png';

function Home() {
  return (
    <div className="page">
      <img src={izzhafeez} alt="Myself" className="icon"></img>
      <br></br>
      <Text
        title={content.about.title}
        content={content.about.content}
      ></Text>
    </div>
  );
}

export default Home;