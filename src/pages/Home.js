import React from 'react';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Izz Hafeez</title>
        <meta name="description"
          content="Hi, I'm a CS/Maths student in NUS with 3.5 years of IT experience. In my spare time, I learn new languages, build geography projects and arrange piano pieces." />
      </Helmet>
    </div>
  );
}

export default Home;