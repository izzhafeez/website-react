import GeoQuiz from "components/pages/details/blog/GeoQuiz";
import { Mall } from "components/pages/details/blog/blogTypes";
import School from "components/pages/details/projects/projectTypes/quizzes/School";
import mallsData from "data/blog/json/malls.json";
import schoolsData from 'data/projects/json/quizzes/schools.json';

const QuizPage = ({ type, item }) => {
  let [constructor, data] = ['', ''];
  switch (type) {
    case 'malls':
      constructor = p => new Mall(p);
      data = mallsData;
      break;
    case 'schools':
      constructor = p => new School(p);
      data = schoolsData;
      break;
    default:
      break;
  }

  return <article className='container pt-4 px-2'>
    <div className='text-start'>
      {item.getHeader()}
    </div>
    {item.description.getParsed()}
    <GeoQuiz constructor={constructor} data={data}/>
  </article>;
};

export default QuizPage;