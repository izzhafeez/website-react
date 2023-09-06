import GeoQuiz from "components/pages/details/projects/quiz/GeoQuiz";
// import citiesData from 'data/projects/json/quizzes/cities.json';
import mallsData from "data/blog/json/malls.json";
import busRoutesData from "data/projects/json/quizzes/bus-routes.json";
import mrtData from "data/projects/json/quizzes/mrt.json";
import mrtChineseData from "data/projects/json/quizzes/mrt-chinese.json";
import nusModsData from "data/projects/json/quizzes/nus-mods.json";
import schoolsData from 'data/projects/json/quizzes/schools.json';
import { useState } from "react";
import { City, Mrt, School } from "components/map/locations";
import Mall from "components/map/locations/Mall";
import BusRoute from "components/map/routes/BusRoute";
import MapQuiz from "components/pages/details/projects/quiz/guessQuiz/MapQuiz";
import ModsQuiz from "components/pages/details/projects/quiz/guessQuiz/ModsQuiz";

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
    case 'mrt-chinese':
      constructor = p => new Mrt(p);
      data = mrtChineseData;
      break;
    case 'bus-routes':
      constructor = p => new BusRoute(p);
      data = busRoutesData;
      break;
    case 'nus-mods':
      data = nusModsData;
      break;
    // case 'cities':
    //   constructor = p => new City(p);
    //   data = !!citiesData[country] ? citiesData[country] : {};
    //   break;
    default:
      break;
  }

  let quiz;
  switch(type) {
    case 'bus-routes':
      quiz = <MapQuiz constructor={constructor} data={data} withMap={true}/>;
      break;
    case 'nus-mods':
      quiz = <ModsQuiz data={data}/>;
      break;
    default:
      quiz = <GeoQuiz constructor={constructor} data={data}/>;
  }

  const changeCountry = event => {
    setCountry(event.target.value);
  }

  const citiesData = [];
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
    {quiz}
  </article>;
};

export default QuizPage;