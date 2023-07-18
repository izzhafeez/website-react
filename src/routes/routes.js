import Merits from "components/pages/details/merits/Merits";
import Projects from "components/pages/details/projects";
import allData from "data/data";

const routesData = [
  {
    path: '/',
    category: 'home',
    constructor: _ => undefined,
    types: []
  },
  {
    category: 'projects',
    constructor: data => new Projects(data),
    ...allData.projects,
    types: [
      'all', 'coding', 'music', 'graphs'
    ]
  },
  {
    category: 'merits',
    constructor: data => new Merits(data),
    ...allData.merits,
    types: [
      'all', 'experiences', 'awards', 'certificates', 'modules', 'languages', 'technologies', 'skills'
    ]
  },
];

export default routesData;