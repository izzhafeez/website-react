import MapContainer from "components/map/MapContainer";
import { useState } from "react";

const GuessQuiz = ({ constructor, data }) => {
  const [answer, setAnswer] = useState('');
  const [options, setOptions] = useState([]);
  const [features, setFeatures] = useState([]);
  const [withOverlay, setWithOverlay] = useState(true);
  const allOptions = Object.keys(data);
  const parsedData = {};
  Object.entries(data).forEach(([k,v]) => {
    parsedData[k] = constructor({ serviceNo: k, points: v });
  })

  const randomise = () => {
    const randOptions = allOptions.sort((a, b) => 0.5 - Math.random());
    const firstOption = randOptions[0];
    setOptions(randOptions);
    setAnswer(firstOption);
    setFeatures(parsedData[firstOption].getFeatures());
  };

  return <section>
    <button onClick={randomise}/>
    <MapContainer category='projects' features={features} withOverlay={withOverlay}/>
  </section>;
};

export default GuessQuiz;
