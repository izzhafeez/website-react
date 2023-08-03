import Merit from '../Merit';

class Module extends Merit {
  constructor({ semester, grade, name, ...fields }) {
    super({
      ...fields,
      imgPath: 'nus.png',
      type: 'modules'
    });
    this.name = name;
    this.semester = semester;
    this.grade = grade;

    if (this.grade === undefined) {
      this.imgPath = undefined;
    }
  };

  getTitle() {
    let className;
    switch (this.grade) {
      case 'A+':
      case 'A':
        className = 'text-success';
        break;
      case 'A-':
        className = 'text-warning';
        break;
      case 'B+':
        className = 'text-danger';
        break;
      default:
        break;
    }

    if (this.grade === undefined) {
      return this.title;
    }
    return <span>{this.title} (<span className={className}>{this.grade}</span>)</span>;
  }

  getSubtitle() {
    return this.name;
  };

  getHeaderText() {
    return `${this.title.toUpperCase()} ${this.name.toUpperCase()}`
  }

  getFields() {
    return ['semester', 'grade'];
  }
};

export default Module;