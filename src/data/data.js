import meritsData from "./merits";
import projectsData from "./projects";

const allData = {
  home: {
    data: {},
    description: "Welcome to my website! Here is where I document some of the things I've <<../merits>>learnt</> and <<../projects>>created</> over the years. "
  },
  merits: {
    data: meritsData,
    description: "Welcome to my Merits Page! Here is where I document some of the things I've learnt over the years. These are the sections you'd find on this page:\n<<../merits/experiences>>Experiences</> are the times that I applied my programming knowledge in a professional sense, be it in internships or work. <<../merits/awards>>Awards</> are the achievements I've received throughout my school life. <<../merits/certificates>>Certificates</> are the courses and tests I've taken outside of school. <<../merits/modules>>Modules</> are the courses I've taken in university. <<../merits/languages>>Languages</> are the human and programming languages I've studied. <<../merits/technologies>>Technologies</> are the frameworks, tools and software that I have learnt and used. <<../merits/skills>>Skills</> are the technical knowledge I've acquired."
  },
  projects: {
    data: projectsData,
    description: "Welcome to my Projects Page! Here is where I document some of the things I've done and created over the years. These are the sections you'd find on this page:\n<<../projects/coding>>Coding</> takes up a substantial portion of my time, as I continually learn and apply new programming concepts to my projects. <<../projects/music>>Music</> used to take up a large portion of my time, as I created piano covers and medlies of popular songs. <<../projects/graphs>>Graphs</> are a form of mathematical art; I've created and posted lots of them on my <<https://www.instagram.com/mynameizzhafeez/?hl=en>>Instagram</>."
  }
};

export default allData;