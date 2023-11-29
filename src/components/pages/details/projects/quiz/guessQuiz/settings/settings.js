import { rotateRandomise, shuffleRandomise } from "../random/randomisers";
import { noLetterSort, numberSort, randomSort } from "../sort/sorters";

const difficulties = {
  mcqeasy: {
    label: 'mcq (easy)',
    sort: noLetterSort,
    randomiser: shuffleRandomise,
    window: 4,
    options: 2,
  },
  mcqmedium: {
    label: 'mcq (medium)',
    sort: numberSort,
    randomiser: rotateRandomise,
    window: 16,
    options: 4,
  },
  mcqhard: {
    label: 'mcq (hard)',
    sort: randomSort,
    randomiser: shuffleRandomise,
    window: 64,
    options: 6
  },
  mcqextreme: {
    label: 'mcq (extreme)',
    sort: randomSort,
    randomiser: rotateRandomise,
    window: 10000,
    options: 8
  },
  freeeasy: {
    label: 'free text (easy)',
    sort: noLetterSort,
    randomiser: shuffleRandomise,
    window: 4,
    options: 2,
    isFreeText: true
  },
  freemedium: {
    label: 'free text (medium)',
    sort: numberSort,
    randomiser: rotateRandomise,
    window: 16,
    options: 1,
    isFreeText: true
  },
  freehard: {
    label: 'free text (hard)',
    sort: randomSort,
    randomiser: shuffleRandomise,
    window: 64,
    options: 1,
    isFreeText: true
  },
  freeextreme: {
    label: 'free text (extreme)',
    sort: randomSort,
    randomiser: rotateRandomise,
    window: 10000,
    options: 1,
    isFreeText: true
  }
};

export default difficulties;