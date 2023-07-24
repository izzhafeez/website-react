import BlogPosts from "./blog";
import Merits from "./merits";
import Projects from "./projects";

class ItemsFactory {
  static getConstructor(category) {
    switch (category) {
      case 'merits':
        return params => new Merits(params);
      case 'projects':
        return params => new Projects(params);
      case 'blog':
        return params => new BlogPosts(params);
      default:
        throw new Error(`Category unknown: ${category}.`)
    }
  }
};

export default ItemsFactory;