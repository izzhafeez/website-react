import { Award, Certificate, Language, Skill, Technology } from "./meritTypes";
import Experience from "./meritTypes/Experience";
import Module from "./meritTypes/Module";

class MeritFactory {
  static getList(jsonData, constructor) {
    const meritsList = Object.entries(jsonData).map(entry => {
      const [key, value] = entry;
      value.key = key;
      return constructor(value);
    });
    meritsList.sort((a, b) => a.title.localeCompare(b.title));
    meritsList.sort((a, b) => b.importance - a.importance);

    return meritsList;
  }

  static getConstructor(type) {
    switch(type) {
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
        throw new Error('Type unknown.');
    }
  }
};

export default MeritFactory;