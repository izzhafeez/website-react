import allData from "data/data";

const routesData = [
  {
    path: '/',
    category: 'home',
    types: []
  },
  {
    category: 'projects',
    ...allData.projects,
    types: [
      'all', 'coding', 'quizzes', 'music', 'graphs'
    ],
  },
  {
    category: 'merits',
    ...allData.merits,
    types: [
      'all', 'experiences', 'awards', 'certificates', 'courses', 'modules', 'languages', 'technologies', 'skills'
    ]
  },
  {
    category: 'blog',
    ...allData.blog,
    types: [
      'all', 'malls', 'hikes'
    ]
  }
];

export default routesData;