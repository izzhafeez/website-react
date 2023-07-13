import Items from '../Items';

class Projects extends Items {
  constructor(fields) {
    super({
      category: 'projects',
      ...fields
    });
  }

  getClassNames() {
    switch (this.type) {
      case 'coding':
        return 'row row-cols-lg-2 row-cols-1 g-2'
      case 'music':
        return 'row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-2'
      default:
        return 'row row-cols-xl-3 row-cols-lg-2 row-cols-1 g-2'
    }
  }
}

export default Projects;