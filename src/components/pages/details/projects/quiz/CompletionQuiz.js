import { useEffect, useState } from "react";
import { randomSort } from "./guessQuiz/sort/sorters";
import { rotateRandomise } from "./guessQuiz/random/randomisers";

const CompletionQuiz = ({ data, parser }) => {
  const parsedData = Object.entries(data).map(([k,v]) => parser(k, v));
  const sortedData = rotateRandomise({ arr: parsedData, sort: randomSort });

  const [itemIndex, setItemIndex] = useState(0);
  const [prompt, setPrompt] = useState('');
  const [answered, setAnswered] = useState([]);
  const [unanswered, setUnanswered] = useState([]);
  const [wrong, setWrong] = useState([]);
  const [show, setShow] = useState(true);

  const showAnswer = () => {
    setShow(true);
  };

  const goNext = () => {
    setShow(false);
    const choice = sortedData[itemIndex];
    setPrompt(choice.prompt);
    setUnanswered(choice.answers);
    setWrong([]);
    setAnswered([]);
    setItemIndex(itemIndex + 1 % sortedData.length);
  }

  const onKeyDown = e => {
    if (e.key !== 'Enter') return;

    const guess = e.target.value;
    if (!guess) {
      return;
    }

    if (unanswered.includes(guess)) {
      setUnanswered(unanswered.filter(u => u !== guess));
      setAnswered([...answered, guess]);
    } else {
      setWrong([...wrong, guess]);
    }

    e.target.value = '';

    return;
  }

  return <section className='text-start'>
    <div className='my-2'>
      <b>Answered: </b> {
        answered.join(', ')
      }<br/>
      <b>Wrong: </b> {
        wrong.join(', ')
      }<br/>
      { show && <b>Missed: </b> }
      { show && unanswered.join(', ') }
      { show && <br/> }
      { !show && <b>Guess: </b> }
      { !show && <input type='text' onKeyDown={onKeyDown} placeholder='Enter answer here'/> }
      { !show && <br/> }
      <b>Score:</b> {answered.length}/{answered.length+unanswered.length}
    </div>
    <h3>{prompt}</h3>
    {
      show || unanswered.length === 0
      ? <button className='btn btn-warning' onClick={goNext}>Next</button>
      : <button className='btn btn-danger' onClick={showAnswer}>Give Up</button>
    }
  </section>;
};

export default CompletionQuiz;