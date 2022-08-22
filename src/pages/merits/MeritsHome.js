import './Merits.css';

import contentData from '../../data/content.json';
import awardsData from '../../data/awards.json';
import certificatesData from '../../data/certificates.json';
import experiencesData from '../../data/experiences.json';
import languagesData from '../../data/languages.json';
import modulesData from '../../data/modules.json';
import skillsData from '../../data/skills.json';
import toolsData from '../../data/tools.json';

import Text from '../../components/Text.js';
import Merit from '../../components/merits/Merit.js';
import Module from '../../components/blog/Module.js';
import Experience from '../../components/merits/Experience.js';

import merits from '../../assets/merits.png';

function MeritsHome() {
  const experiencesPreview = Object.keys(experiencesData.experiences).map((key, experience) => {
    const merit = experiencesData.experiences[key];
    merit["key"] = key;
    return (
      <Experience
        merit={merit}
      ></Experience>
    );
  });
  const certificatesPreview = Object.keys(certificatesData.certificates).slice(0, 6).map((key, certificate) => {
    const merit = certificatesData.certificates[key];
    merit["key"] = key;
    merit["kind"] = "certificates";
    return (
      <Merit
        merit={merit}
      ></Merit>
    );
  });
  const awardsPreview = Object.keys(awardsData.awards).slice(0, 6).map((key, award) => {
    const merit = awardsData.awards[key];
    merit["key"] = key;
    merit["kind"] = "awards";
    return (
      <Merit
        merit={merit}
      ></Merit>
    );
  });
  const languagesPreview = Object.keys(languagesData.languages).slice(0, 6).map((key, language) => {
    const merit = languagesData.languages[key];
    merit["key"] = key;
    merit["kind"] = "languages";
    return (
      <Merit
        merit={merit}
      ></Merit>
    );
  });
  const toolsPreview = Object.keys(toolsData.tools).slice(0, 6).map((key, tool) => {
    const merit = toolsData.tools[key];
    merit["key"] = key;
    merit["kind"] = "tools";
    return (
      <Merit
        merit={merit}
      ></Merit>
    );
  });
  const skillsPreview = Object.keys(skillsData.skills).slice(0, 6).map((key, skill) => {
    const merit = skillsData.skills[key];
    merit["key"] = key;
    merit["kind"] = "skills";
    return (
      <Merit
        merit={merit}
      ></Merit>
    );
  });
  const modulesPreview = Object.keys(modulesData.modules).slice(0, 6).map((key, _) => {
    const module = modulesData.modules[key];
    module["key"] = key;
    module["kind"] = "modules";
    return (
      <Module
        module={module}
      ></Module>
    );
  });
  return (
    <div className="page">
      <img src={merits} alt="Logo" className="icon"></img>
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
      <br></br>
      <h2 id="skills">SKILLS</h2>
      <div className="merits-entries">{skillsPreview}</div>
      <br></br>
      <h2 id="modules">MODULES</h2>
      <div className="merits-entries">{modulesPreview}</div>
    </div>
  );
}

export default MeritsHome;