const letterRegex = /[A-Za-z]/g;
const numberRegex = /[0-9]+/g;

export const noLetterSort = (a, b) => (
  !!a.match(letterRegex) - !!b.match(letterRegex) + 0.5 - Math.random()
); // nudges all letters to the end

export const randomSort = (a, b) => 0.5 - Math.random(); // completely random

export const numberSort = (a, b) => (
  a.match(numberRegex)[0] - b.match(numberRegex)[0]
); // sorts buses by their numeric value