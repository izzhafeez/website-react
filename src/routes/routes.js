import MeritPage from "containers/pages/merits/MeritPage";
import MeritsHome from "containers/pages/merits/MeritsHome";
// import { blogRoutesData } from "data/blog";
import { meritsRoutesData } from "data/merits";
import { worksRoutesData } from "data/works";

const routesData = [
  {
    path: '/',
    label: 'Home',
    imgPath: 'home.svg',
    element: () => <div></div>,
    pageElement: () => <div></div>,
    subroutes: []
  },
  {
    path: '/merits',
    label: 'Merits',
    imgPath: 'merits.svg',
    element: (type) => <MeritsHome type={type}/>,
    pageElement: (type) => <MeritPage type={type}/>,
    subroutes: meritsRoutesData
  },
  // {
  //   path: '/works',
  //   label: 'Works',
  //   imgPath: 'icons/works.svg',
  //   element: <div></div>,
  //   subroutes: worksRoutesData
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