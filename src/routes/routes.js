import MeritPage from "containers/pages/merits/MeritPage";
import MeritsHome from "containers/pages/merits/MeritsHome";
import { blogRoutesData } from "data/blog";
import { meritsRoutesData } from "data/merits";
import { projectsRoutesData } from "data/projects";

const routesData = [
  // {
  //   path: '/',
  //   label: 'Home',
  //   imgPath: 'icons/home.svg',
  //   element: <div></div>,
  //   subroutes: []
  // },
  {
    path: '/merits',
    label: 'Merits',
    imgPath: 'icons/merits.svg',
    element: (subpage) => <MeritsHome subpage={subpage}/>,
    pageElement: (subpage) => <MeritPage subpage={subpage}/>,
    subroutes: meritsRoutesData
  },
  // {
  //   path: '/projects',
  //   label: 'Projects',
  //   imgPath: 'icons/projects.svg',
  //   element: <div></div>,
  //   subroutes: projectsRoutesData
  // },
  // {
  //   path: '/blog',
  //   label: 'Blog',
  //   imgPath: 'icons/blog.svg',
  //   element: <div></div>,
  //   subroutes: blogRoutesData
  // },
];

export default routesData;