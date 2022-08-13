import './Merits.css';

import contentData from '../data/content.json';
import awardsData from '../data/awards.json';
import certificatesData from '../data/certificates.json';
import experiencesData from '../data/experiences.json';
import languagesData from '../data/languages.json';
import toolsData from '../data/tools.json';

import Text from '../components/Text.js';
import Merit from '../components/Merit.js';
import Experience from '../components/Experience.js';

import desmosito from '../assets/desmosito.png';

function Merits() {
  const experiencesPreview = Object.keys(experiencesData.experiences).map((key, experience) => {
    return (
      <Experience
        experience={experiencesData.experiences[key]}
      ></Experience>
    );
  });
  const certificatesPreview = certificatesData.certificates.map((certificate) => {
    return (
      <Merit
        merit={certificate}
      ></Merit>
    );
  });
  const awardsPreview = awardsData.awards.map((award) => {
    return (
      <Merit
        merit={award}
      ></Merit>
    );
  });
  const languagesPreview = languagesData.languages.slice(0, 10).map((language) => {
    return (
      <Merit
        merit={language}
      ></Merit>
    );
  });
  const toolsPreview = toolsData.tools.slice(0, 10).map((tool) => {
    return (
      <Merit
        merit={tool}
      ></Merit>
    );
  });
  return (
    <div className="page">
      <img src={desmosito} alt="Logo" className="icon"></img>
      <Text
        title={contentData.merits.title}
        content={contentData.merits.content}
      ></Text>
      <h2 id="experience">EXPERIENCE</h2>
      <div className="experience-entries">{experiencesPreview}</div>
      <br></br>
      <h2 id="certificates">CERTIFICATES</h2>
      <div className="merits-entries">{certificatesPreview}</div>
      <br></br>
      <h2 id="awards">AWARDS</h2>
      <div className="merits-entries">{awardsPreview}</div>
      <br></br>
      <h2 id="languages">LANGUAGES</h2>
      <div className="merits-entries">{languagesPreview}</div>
      <br></br>
      <h2 id="tools">TOOLS</h2>
      <div className="merits-entries">{toolsPreview}</div>
    </div>
  );
}

export default Merits;