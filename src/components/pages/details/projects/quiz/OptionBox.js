import { useEffect, useState } from "react";

const OptionBox = ({ options, answer, handleScore }) => {
  const [clicked, setClicked] = useState('');

  const handleClick = event => {
    if (!!clicked) {
      return;
    }
    const guess = event.target.value;
    setClicked(guess);
    handleScore(guess == answer);
  };

  useEffect(() => {
    setClicked('');
  }, [options, answer])

  const getClassName = option => {
    let base = 'btn me-2 ';
    if (!clicked) {
      base += 'btn-info';
    } else if (option == answer) {
      base += 'btn-success';
    } else if (option == clicked) {
      base += 'btn-danger';
    } else {
      base += 'btn-info';
    }
    return base;
  }

  return <section className='justify-content-start my-2'>
    <div className='mb-2'><b>Options:</b></div>
    {options.map(option =>
      <button
        className={getClassName(option)}
        onClick={handleClick}
        value={option}
        key={option}
      >
        {option}
      </button>
    )}
  </section>
};

export default OptionBox;