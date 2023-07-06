const StarScale = ({ value }) => {
  const emptyStar = '☆';
  const fullStar = '★';

  if (!Number.isInteger(value)) {
    throw new Error('Value on the scale must be a number.');
  }

  if (value < 0 || value > 5) {
    throw new Error('Value is out of bounds.');
  }

  const starString = fullStar.repeat(value) + emptyStar.repeat(5 - value);

  return <span>{starString}</span>;
};

export default StarScale;