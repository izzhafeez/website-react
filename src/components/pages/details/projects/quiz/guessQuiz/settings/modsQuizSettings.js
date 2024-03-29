import { rotateRandomise, shuffleRandomise } from "../random/randomisers";
import { noLetterSort, noSort, normalSort, numberSort, randomSort } from "../sort/sorters";

const difficulties = {
  easy: {
    label: 'easy',
    sort: numberSort,
    randomiser: rotateRandomise,
    window: 4,
    options: 2,
  },
  medium: {
    label: 'medium',
    sort: normalSort,
    randomiser: rotateRandomise,
    window: 8,
    options: 4,
  },
  hard: {
    label: 'hard',
    sort: randomSort,
    randomiser: rotateRandomise,
    window: 16,
    options: 6
  },
  extreme: {
    label: 'extreme',
    sort: normalSort,
    randomiser: rotateRandomise,
    window: 32,
    options: 1,
    isFreeText: true
  },
  impossible: {
    label: 'impossible',
    sort: randomSort,
    randomiser: shuffleRandomise,
    window: 64,
    options: 1,
    isFreeText: true
  },
  asian: {
    label: 'asian',
    sort: randomSort,
    randomiser: rotateRandomise,
    window: 10000,
    options: 8
  },
  wanggang: {
    label: 'wanggang',
    sort: randomSort,
    randomiser: rotateRandomise,
    window: 10000,
    options: 1,
    isFreeText: true
  }
};

export default difficulties;