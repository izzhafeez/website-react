const StarScale = ({ value }) => {
  const emptyStar = '☆';
  const fullStar = '★';
  const halfStar = <span key='half' className='text-muted'>★</span>;

  if (!Number.isInteger(value)) {
    throw new Error('Value on the scale must be a number.');
  }

  if (value < 0 || value > 10) {
    throw new Error('Value is out of bounds.');
  }

  const fullStarCount = Math.floor(value / 2);
  const emptyStarCount = Math.floor((10 - value) / 2);
  const halfStarCount = value % 2;
  const starsList = [
    <span key='full'>{fullStar.repeat(fullStarCount)}</span>, 
    ...Array(halfStarCount).fill(halfStar),
    <span key='empty'>{emptyStar.repeat(emptyStarCount)}</span>
  ];

  return <span>{starsList}</span>;
};

export default StarScale;