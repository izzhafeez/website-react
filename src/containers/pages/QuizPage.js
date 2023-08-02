import GeoQuiz from "components/pages/details/blog/GeoQuiz";
import { Mall } from "components/pages/details/blog/blogTypes";
import City from "components/pages/details/projects/projectTypes/quizzes/City";
import School from "components/pages/details/projects/projectTypes/quizzes/School";
import citiesData from 'data/projects/json/quizzes/cities.json';
import mallsData from "data/blog/json/malls.json";
import mrtData from "data/projects/json/quizzes/mrt.json";
import schoolsData from 'data/projects/json/quizzes/schools.json';
import { useState } from "react";
import Mrt from "components/pages/details/projects/projectTypes/quizzes/Mrt";

const QuizPage = ({ type, item }) => {
  let [constructor, data] = ['', ''];
  const [country, setCountry] = useState('Japan');
  switch (type) {
    case 'malls':
      constructor = p => new Mall(p);
      data = mallsData;
      break;
    case 'schools':
      constructor = p => new School(p);
      data = schoolsData;
      break;
    case 'mrt':
      constructor = p => new Mrt(p);
      data = mrtData;
      break;
    case 'cities':
      constructor = p => new City(p);
      data = !!citiesData[country] ? citiesData[country] : {};
      break;
    default:
      break;
  }

  const changeCountry = event => {
    setCountry(event.target.value);
  }

  const options = Object.entries(citiesData).map(([k, v]) => {
    return k;
  }).sort();

  return <article className='container pt-4 px-2'>
    <div className='text-start'>
      {item.getHeader()}
    </div>
    {item.description.getParsed()}
    { type === 'cities' && <div className='text-start'>
      <div className='form-group'>
        <label htmlFor='country'>
          <b>Select country:</b>
        </label>
        <select value={country} name='country' onChange={changeCountry} className='form-select my-2'>
          <option>Select Country</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      </div>
    }
    <GeoQuiz constructor={constructor} data={data}/>
  </article>;
};

export default QuizPage;