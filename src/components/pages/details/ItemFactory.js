import { Award, Certificate, Experience, Language, Module, Skill, Technology } from "./merits/meritTypes";
import Coding from "./projects/projectTypes/Coding";
import Music from "./projects/projectTypes/Music";

class ItemFactory {
  static getList(jsonData, constructor) {
    const itemsList = Object.entries(jsonData).map(entry => {
      const [key, value] = entry;
      value.key = key;
      return constructor(value);
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
      default:
        throw new Error(`Category unknown: ${category}.`)
    }
  }

  static getMeritsConstructor(type) {
    switch (type) {
      case 'awards':
        return params => new Award(params);
      case 'certificates':
        return params => new Certificate(params);
      case 'experiences':
        return params => new Experience(params);
      case 'languages':
        return params => new Language(params);
      case 'modules':
        return params => new Module(params);
      case 'skills':
        return params => new Skill(params);
      case 'technologies':
        return params => new Technology(params);
      default:
        throw new Error(`Type unknown: ${type}.`);
    };
  }

  static getProjectsConstructor(type) {
    switch (type) {
      case 'coding':
        return params => new Coding(params);
      case 'music':
        return params => new Music(params);
      default:
        throw new Error(`Type unknown: ${type}.`);
    }
  }
};

export default ItemFactory;