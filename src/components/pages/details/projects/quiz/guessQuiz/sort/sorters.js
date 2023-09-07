import { getRandom } from "../random/randomisers";

const letterRegex = /[A-Za-z]/g;
const numberRegex = /[0-9]+/g;

export const noLetterSort = (a, b) => (
  !!a.match(letterRegex) - !!b.match(letterRegex) + 0.5 - getRandom()
); // nudges all letters to the end

export const randomSort = (a, b) => 0.5 - getRandom(); // completely random

export const numberSort = (a, b) => (
  a.match(numberRegex)[0] - b.match(numberRegex)[0]
); // sorts buses by their numeric value

export const normalSort = (a, b) => (
  a.localeCompare(b)
);

export const noSort = (a, b) => (
  false
);