export const shuffleRandomise = ({ arr, sort }) => {
  return arr.sort(sort);
}; // just sort

export const rotateRandomise = ({ arr, sort }) => {
  const sortedArr = arr.sort(sort);
  const rotateAmount = Math.floor(Math.random() * arr.length);
  return [
    ...sortedArr.slice(rotateAmount, arr.length),
    ...sortedArr.slice(0, rotateAmount)
  ];
}; // to allow the quiz to use similar bus numbers