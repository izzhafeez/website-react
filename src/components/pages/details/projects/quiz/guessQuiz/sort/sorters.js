const letterRegex = /[A-Za-z]/g;
const numberRegex = /[0-9]+/g;

export const easySort = (a, b) => !!a.match(letterRegex) - !!b.match(letterRegex) + 0.5 - Math.random();

export const mediumSort = (a, b) => 0.5 - Math.random();

export const hardSort = (a, b) => a.match(numberRegex)[0] - b.match(numberRegex)[0];