import QuizPage from "containers/pages/QuizPage";
import Project from "../Project";

class Quiz extends Project {
  constructor({ link, isLive, ...fields }) {
    super({
      type: 'quizzes',
      ...fields
    });
    this.link = link;
    this.isLive = isLive;
  };

  getPage() {
    if (this.isLive) {
      return <QuizPage type={this.key} item={this}/>
    }

    return super.getPage();
  }

  getFields() {
    return ['link'];
  }
};

export default Quiz;