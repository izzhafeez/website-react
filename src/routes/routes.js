import BlogPosts from "components/pages/details/blog/BlogPosts";
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
      'all', 'coding', 'music', 'graphs', 'quizzes'
    ],
  },
  {
    category: 'merits',
    constructor: data => new Merits(data),
    ...allData.merits,
    types: [
      'all', 'experiences', 'awards', 'certificates', 'modules', 'languages', 'technologies', 'skills'
    ]
  },
  {
    category: 'blog',
    constructor: data => new BlogPosts(data),
    ...allData.blog,
    types: [
      'all', 'malls', 'hikes'
    ]
  },
];

export default routesData;