import Project from "../Project";

class Quiz extends Project {
  constructor({ link, ...fields }) {
    super({
      type: 'quizzes',
      ...fields
    });
    this.link = link;
  };

  getFields() {
    return ['link'];
  }
};

export default Quiz;