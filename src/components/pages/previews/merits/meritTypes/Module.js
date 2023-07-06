import Merit from '../Merit';

class Module extends Merit {
  constructor({ key, title, imgPath, importance, semester, grade }) {
    super({ key, title, imgPath, importance });
    this.semester = semester;
    this.grade = grade;
  };

  getSubtitle() {
    const subtitleFields = [ this.grade, this.semester ].filter(field => field);
    return subtitleFields.join(' | ');
  };

  getLink() {
    return `/merits/modules/${this.key}`;
  };
};

export default Module;