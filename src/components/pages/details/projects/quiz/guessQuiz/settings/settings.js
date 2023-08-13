import { rotateRandomise, shuffleRandomise } from "../random/randomisers";
import { easySort, hardSort, mediumSort } from "../sort/sorters";

const difficulties = {
  easy: {
    label: 'easy',
    sort: easySort,
    randomiser: shuffleRandomise,
    window: 6,
    options: 2
  },
  medium: {
    label: 'medium',
    sort: mediumSort,
    randomiser: shuffleRandomise,
    window: 10,
    options: 2
  },
  hard: {
    label: 'hard',
    sort: hardSort,
    randomiser: rotateRandomise,
    window: 10,
    options: 5
  }
};

export default difficulties;