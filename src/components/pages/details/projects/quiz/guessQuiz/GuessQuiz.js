import MapContainer from "components/map/MapContainer";
import { useEffect, useState } from "react";
import OptionBox from "./OptionBox";
import settings from "./settings";

const GuessQuiz = ({ constructor, data }) => {
  const [setting, setSetting] = useState(settings.easy);

  const sortOptions = () => setting.randomiser({ arr: Object.keys(data), sort: setting.sort });
  const [allOptions, setAllOptions] = useState(sortOptions());

  const parsedData = {};
  Object.entries(data).forEach(([k, v]) => {
    parsedData[k] = constructor({ serviceNo: k, points: v });
  });

  const [defaultWindowSize, setDefaultWindowSize] = useState(setting.window);
  const [windowSize, setWindowSize] = useState(defaultWindowSize);

  const [defaultOptionsSize, setDefaultOptionsSize] = useState(setting.options);
  const [optionsSize, setOptionsSize] = useState(defaultOptionsSize);

  const [options, setOptions] = useState(allOptions.slice(0, optionsSize));
  const [answer, setAnswer] = useState(allOptions[0]);
  const [features, setFeatures] = useState(parsedData[answer].getFeatures());
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(Object.keys(settings).reduce((map, obj) => {
    map[obj] = 0;
    return map;
  }, {}));

  useEffect(() => {
    const allOptions = sortOptions();
    setAllOptions(allOptions);
    setDefaultWindowSize(setting.window);
    setDefaultOptionsSize(setting.options);
    handleEnd();
    randomise({
      force: true,
      allOptions_: allOptions,
      windowSize_: setting.window,
      optionsSize_: setting.options
    });
  }, [setting]);

  const randomise = ({ force, allOptions_=allOptions, windowSize_=windowSize, optionsSize_=optionsSize }) => {
    if (!hasAnswered && !force) return;
    let newAnswer = answer;
    let newOptions;
    while (newAnswer === answer) {
      const window = allOptions_
        .slice(0, windowSize_)
        .sort((a, b) => 0.5 - Math.random());
      newOptions = window.slice(0, optionsSize_);
      newAnswer = newOptions[0];
    }
    setOptions(newOptions.sort((a, b) => 0.5 - Math.random()));
    setAnswer(newAnswer);
    setFeatures(parsedData[newAnswer].getFeatures());
    setHasAnswered(false);
  };

  const handleEnd = () => {
    setScore(0);
    setOptionsSize(defaultOptionsSize);
    setWindowSize(defaultWindowSize);
  }

  const handleScore = isCorrect => {
    setHasAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
      bestScore[setting.label] = Math.max(score + 1, bestScore[setting.label])
      setBestScore(bestScore);
      setWindowSize(windowSize + 1);
      if (score % 5 == 4) {
        setOptionsSize(optionsSize + 1);
      }
    } else {
      handleEnd();
    }
  }

  const handleSetting = e => {
    setSetting(settings[e.target.value]);
  }

  return <section className='text-start'>
    <b>Difficulty:</b> <select onChange={handleSetting}>
      {Object.keys(settings).map(d =>
        <option
          key={d}
          label={d.toUpperCase()}
          value={d}
        />
      )}
    </select>
    <div className='my-2'>
      <b>Current Streak:</b> {score}
      <b className='ms-4'>Best {setting.label.toUpperCase()} Streak:</b> {bestScore[setting.label]}<br/>
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
