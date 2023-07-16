import Merits from "components/pages/details/merits/Merits";
import Projects from "components/pages/details/projects";
import meritsData from "data/merits";
import projectsData from "data/projects";

const routesData = [
  {
    path: '/',
    category: 'home',
    constructor: _ => undefined,
    data: {},
    types: []
  },
  {
    category: 'merits',
    constructor: data => new Merits(data),
    data: meritsData,
    types: [
      'all',
      'experiences',
      'awards',
      'certificates',
      'modules',
      'languages',
      'technologies',
      'skills'
    ]
  },
  {
    category: 'projects',
    constructor: data => new Projects(data),
    data: projectsData,
    types: [
      'all',
      'coding',
      'music',
      'graphs'
    ]
  },
];

export default routesData;