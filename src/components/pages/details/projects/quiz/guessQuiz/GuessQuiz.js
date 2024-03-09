import { useEffect, useMemo, useState } from "react";
import { settings } from "./settings";
import InputBox from "./input/InputBox";
import { getRandom } from "./random/randomisers";

const GuessQuiz = ({ data, parser, container, isMap=false }) => {
  const [setting, setSetting] = useState(settings.mcqeasy);
  const sortOptions = (regex) => setting.randomiser({ arr: Object.keys(data).filter(d => regex === undefined || regex.test(d)), sort: setting.sort });
  const [allOptions, setAllOptions] = useState(sortOptions());

  const parsedData = useMemo(() => Object.entries(data).reduce((map, [k, v]) => {
    map[k] = parser(k, v);
    return map;
  }, {}));

  const [defaultWindowSize, setDefaultWindowSize] = useState(setting.window);
  const [windowSize, setWindowSize] = useState(defaultWindowSize);

  const [defaultOptionsSize, setDefaultOptionsSize] = useState(setting.options);
  const [optionsSize, setOptionsSize] = useState(defaultOptionsSize);

  const [options, setOptions] = useState(allOptions.slice(0, optionsSize));
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState(allOptions[0]);
  const [prevAnswer, setPrevAnswer] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(Object.values(settings).reduce((map, val) => {
    map[val.label] = 0;
    return map;
  }, {}));

  useEffect(() => {
    const allOptions = sortOptions();
    setAllOptions(allOptions);
    handleEnd();
    setDefaultWindowSize(setting.window);
    setWindowSize(setting.window);
    setDefaultOptionsSize(setting.options);
    setOptionsSize(setting.options);
    randomise({
      force: true,
      allOptions_: allOptions,
      windowSize_: setting.window,
      optionsSize_: setting.options
    });
    setPrevAnswer('');
  }, [setting]);

  const randomise = ({ force, allOptions_=allOptions, windowSize_=windowSize, optionsSize_=optionsSize }) => {
    if (!hasAnswered && !force) return;
    setPrevAnswer(answer);

    let newOptionsSet = new Set();
    const correctedWindowSize = Math.min(windowSize_, allOptions.length);
    const correctedOptionsSize = Math.min(optionsSize_, allOptions.length);
    while (newOptionsSet.size < correctedOptionsSize) {
      const randomIndex = Math.floor(getRandom() * correctedWindowSize);
      const newOption = allOptions_[randomIndex];
      if (newOption !== answer) {
        newOptionsSet.add(newOption);
      }
    }

    const newOptionsArr = [...newOptionsSet];
    setOptions(newOptionsArr);

    const randomIndex = Math.floor(getRandom() * optionsSize_);
    const newAnswer = newOptionsArr[randomIndex];
    setAnswer(newAnswer);
    setPrompt(data[newAnswer]);
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

    if (setting.isFreeText) {
      randomise({ force: true });
    }
  }

  const handleSetting = e => {
    setSetting(settings[e.target.value]);
  }

  const handleRegex = e => {
    if (e.key === 'Enter') {
      const newOptions = sortOptions(new RegExp(e.target.value));
      if (newOptions.length < 2) {
        e.target.placeholder = `${e.target.value}: Not enough results!`
        e.target.value = '';
        return;
      }
      setAllOptions(newOptions);
      e.target.placeholder = e.target.value;
      e.target.value = '';
    }
  }

  const filledContainer = container({
    category: 'projects',
    features: isMap ? parsedData[answer].getFeatures() : undefined,
    withOverlay: false,
    prompt: prompt
  });

  return <section className='text-start'>
    <b>Difficulty:</b> <select onChange={handleSetting}>
      {Object.entries(settings).map(([k, v]) =>
        <option
          key={k}
          label={v.label.toUpperCase()}
          value={k}
        />
      )}
    </select><br/>
    <b>Regex:</b> <input onKeyDown={handleRegex}/>
    <div className='my-2'>
      <b>Current Streak:</b> {score}
      <b className='ms-4'>Best {setting.label.toUpperCase()} Streak:</b> {bestScore[setting.label]}<br/>
    </div>
    {!isMap && filledContainer}
    {InputBox({ options, answer, handleScore, isFreeText: setting.isFreeText, data: parsedData, hasAnswered })}
    {setting.isFreeText && !!prevAnswer &&
      <div className='mb-2'>{(!!score ? <span className='text-success'>Correct!</span> : <span className='text-danger'>Wrong!</span>)} Answer was: {prevAnswer}</div>
    }
    {!setting.isFreeText && (hasAnswered
      ? <button onClick={randomise} className='btn btn-warning mb-2'>Next</button>
      : <button className='btn btn-outline-warning mb-2' disabled>Next</button>)
    }
    {isMap && filledContainer}
  </section>;
};

export default GuessQuiz;
