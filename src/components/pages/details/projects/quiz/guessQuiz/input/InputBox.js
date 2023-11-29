import { useState } from "react";

const InputBox = ({ options, answer, handleScore, isFreeText, data }) => {
  const [guess, setGuess] = useState('');

  const handleClick = e => {
    if (!!guess) {
      return;
    }
    const newGuess = e.target.value;
    setGuess(newGuess);
    handleScore(newGuess == answer);
  };

  const getClassName = option => {
    let base = 'btn me-2 ';
    if (!guess) {
      base += 'btn-info';
    } else if (option == answer) {
      base += 'btn-success';
    } else if (option == guess) {
      base += 'btn-danger';
    } else {
      base += 'btn-info';
    }
    return base;
  }

  const onKeyDown = e => {
    if (!!guess) {
      return;
    }
    
    if (e.key === 'Enter') {
      const guess = e.target.value;
      if (!guess) {
        return;
      }
      setGuess(guess);
      if (data) {
        handleScore(data[guess] == data[answer]);
      } else {
        handleScore(guess === answer);
      }
      e.target.value = '';
    }
  }

  return <section className='justify-content-start'>
    <div className='my-2'>
      {isFreeText
        ? <input type='text' onKeyDown={onKeyDown} placeholder='Enter answer here'/>
        : options.map(option =>
          <button
            className={getClassName(option)}
            onClick={handleClick}
            value={option}
            key={option}
          >
            {option}
          </button>
        )
      }
    </div>
  </section>
};

export default InputBox;