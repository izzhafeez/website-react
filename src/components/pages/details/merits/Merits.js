import './style.scss';
import Items from '../Items';
import Sizes from '../Sizes';

class Merits extends Items {
  constructor(fields) {
    super({
      category: 'merits',
      ...fields
    });
  }

  getSize() {
    switch (this.type) {
      case 'technologies':
      case 'languages':
      case 'skills':
        return Sizes.SMALL;
      case 'experiences':
        return Sizes.LARGE;
      default:
        return Sizes.MEDIUM;
    }
  }
}

export default Merits;