import MapContainer from "components/map/MapContainer";
import { useState } from "react";
import OptionBox from "./OptionBox";

const GuessQuiz = ({ constructor, data }) => {
  const randomiser = (a, b) => 0.5 + (a.length - b.length) * 0.3 - Math.random();
  const [allOptions, setAllOptions] = useState(Object.keys(data).sort(randomiser));
  const parsedData = {};
  Object.entries(data).forEach(([k,v]) => {
    parsedData[k] = constructor({ serviceNo: k, points: v });
  })
  const [windowSize, setWindowSize] = useState(6);
  const [optionsSize, setOptionsSize] = useState(2);
  const [options, setOptions] = useState(allOptions.slice(0, optionsSize));
  const [answer, setAnswer] = useState(allOptions[0]);
  const [features, setFeatures] = useState(parsedData[answer].getFeatures());
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const randomise = () => {
    if (!hasAnswered) return;
    const window = allOptions
      .slice(0, windowSize)
      .sort((a, b) => 0.5 - Math.random());
    const options = window.slice(0, optionsSize);
    const answer = options[0];
    setOptions(options.sort((a, b) => 0.5 - Math.random()));
    setAnswer(answer);
    setFeatures(parsedData[answer].getFeatures());
    setHasAnswered(false);
  };

  const handleScore = isCorrect => {
    setHasAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
      setBestScore(Math.max(score + 1, bestScore));
      setWindowSize(windowSize + 1);
      if (score % 5 == 4) {
        setOptionsSize(optionsSize + 1);
      }
    } else {
      setScore(0);
      setOptionsSize(2);
      setWindowSize(6);
    }
  }

  return <section className='text-start'>
    <div className='my-2'>
      <b>Current Streak:</b> {score}
      <b className='ms-4'>Best Streak:</b> {bestScore}<br/>
    </div>
    <OptionBox options={options} answer={answer} handleScore={handleScore}/>
    {hasAnswered
      ? <button onClick={randomise} className='btn btn-warning mb-2'>Next</button>
      : <button className='btn btn-outline-warning mb-2' disabled>Next</button>
    }
    <MapContainer category='projects' features={features} withOverlay={false}/>
  </section>;
};

export default GuessQuiz;
