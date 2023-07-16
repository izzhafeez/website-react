import Items from '../Items';
import Sizes from '../Sizes';

class Projects extends Items {
  constructor(fields) {
    super({
      category: 'projects',
      ...fields
    });
  }

  getSize() {
    switch (this.type) {
      case 'coding':
        return Sizes.LARGE;
      case 'music':
      case 'graphs':
        return Sizes.SMALL;
      default:
        return Sizes.MEDIUM;
    }
  }
}

export default Projects;