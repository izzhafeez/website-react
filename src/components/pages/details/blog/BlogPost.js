import Item from '../Item';
import './style.scss';

class BlogPost extends Item {
  constructor(fields) {
    super({
      category: 'blog',
      ...fields,
    })
  }
}

export default BlogPost;