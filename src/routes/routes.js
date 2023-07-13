import Merits from "components/pages/details/merits/Merits";
import Projects from "components/pages/details/projects";
import Landing from "containers/pages/Landing";
import Page from "containers/pages/Page";
import { meritsData, meritsRoutesData } from "data/merits";
import { projectsRoutesData } from "data/projects";
import projectsData from "data/projects/projectsData";

const routesData = [
  {
    path: '/',
    category: 'home',
    imgPath: 'home.svg',
    element: () => <div></div>,
    pageElement: () => <div></div>,
    subroutes: []
  },
  {
    category: 'merits',
    imgPath: 'merits.svg',
    element: (type) => <Landing
      category='merits'
      constructor={data => new Merits(data)}
      data={meritsData}
      routesData={meritsRoutesData}
      type={type}
    />,
    pageElement: (type) => <Page
      category='merits'
      type={type}
      data={meritsData}
    />,
    subroutes: meritsRoutesData
  },
  {
    category: 'projects',
    imgPath: 'projects.svg',
    element: (type) => <Landing
      category='projects'
      constructor={data => new Projects(data)}
      data={projectsData}
      routesData={projectsRoutesData}
      type={type}
    />,
    pageElement: (type) => <Page
      category='projects'
      type={type}
      data={projectsData}
    />,
    subroutes: projectsRoutesData
  },
];

export default routesData;