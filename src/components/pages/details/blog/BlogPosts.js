import './style.scss';
import Items from '../Items';
import Sizes from '../Sizes';

class BlogPosts extends Items {
  constructor(fields) {
    super({
      category: 'blog',
      ...fields
    });
  }

  getSize() {
    switch (this.type) {
      case 'malls':
        return Sizes.SMALL;
      case 'experiences':
        return Sizes.LARGE;
      default:
        return Sizes.MEDIUM;
    }
  }
}

export default BlogPosts;