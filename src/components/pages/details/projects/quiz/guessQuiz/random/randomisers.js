export const shuffleRandomise = ({ arr, sort }) => {
  return arr.sort(sort);
};

export const rotateRandomise = ({ arr, sort }) => {
  const sortedArr = arr.sort(sort);
  const rotateAmount = Math.floor(Math.random() * arr.length);
  return [
    ...arr.slice(rotateAmount, arr.length),
    ...arr.slice(0, rotateAmount)
  ];
}