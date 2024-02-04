import { useState } from "react";

const InputBox = ({ options, answer, handleScore, isFreeText, data, hasAnswered }) => {
  const [guess, setGuess] = useState('');

  const handleClick = e => {
    const newGuess = e.target.value;
    setGuess(newGuess);
    handleScore(newGuess == answer);
  };

  const getClassName = option => {
    let base = 'btn me-2 ';
    if (!guess || !hasAnswered) {
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

  const normalise = text => text.replace(/\s+/g, '').toLowerCase();

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      const guess = e.target.value;
      if (!guess) {
        return;
      }
      setGuess(guess);
      if (data[guess]) {
        handleScore(normalise(data[guess]) == normalise(data[answer]));
      } else {
        handleScore(normalise(guess) === normalise(answer));
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