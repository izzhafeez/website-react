import { HikePost } from "./blog/blogTypes";
import MallPost from "./blog/blogTypes/MallPost";
import { Award, Certificate, Course, Experience, Language, Module, Skill, Technology } from "./merits/meritTypes";
import { Coding, Graph, Music, Quiz } from "./projects/projectTypes";

class ItemFactory {
  static getList(jsonData, constructor) {
    const itemsList = Object.entries(jsonData).map(entry => {
      const [key, value] = entry;
      return constructor(key)(value);
    });
    itemsList.sort((a, b) => a.title.localeCompare(b.title));
    itemsList.sort((a, b) => b.importance - a.importance);

    return itemsList;
  }

  static getConstructor(category) {
    switch (category) {
      case 'merits':
        return ItemFactory.getMeritsConstructor;
      case 'projects':
        return ItemFactory.getProjectsConstructor;
      case 'blog':
        return ItemFactory.getBlogConstructor;
      default:
        throw new Error(`Category unknown: ${category}.`)
    }
  }

  static getMeritsConstructor(type) {
    switch (type) {
      case 'awards':
        return page => params => new Award({key: page, ...params});
      case 'certificates':
        return page => params => new Certificate({key: page, ...params});
      case 'courses':
        return page => params => new Course({key: page, ...params});
      case 'experiences':
        return page => params => new Experience({key: page, ...params});
      case 'languages':
        return page => params => new Language({key: page, ...params});
      case 'modules':
        return page => params => new Module({key: page, ...params});
      case 'skills':
        return page => params => new Skill({key: page, ...params});
      case 'technologies':
        return page => params => new Technology({key: page, ...params});
      default:
        throw new Error(`Type unknown: ${type}.`);
    };
  }

  static getProjectsConstructor(type) {
    switch (type) {
      case 'coding':
        return page => params => new Coding({key: page, ...params});
      case 'music':
        return page => params => new Music({key: page, ...params});
      case 'graphs':
        return page => params => new Graph({key: page, ...params});
      case 'quizzes':
        return page => params => new Quiz({key: page, ...params});
      default:
        throw new Error(`Type unknown: ${type}.`);
    }
  }

  static getBlogConstructor(type) {
    switch(type) {
      case 'malls':
        return page => params => new MallPost({key: page, ...params});
      case 'hikes':
        return page => params => new HikePost({key: page, ...params});
      default:
        throw new Error(`Type unknown: ${type}.`);
    }
  }
};

export default ItemFactory;