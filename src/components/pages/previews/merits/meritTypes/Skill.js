import StarScale from "components/basic/text/star/StarScale";
import Merit from "../Merit";

class Skill extends Merit {
  constructor({ key, title, imgPath, importance, level }) {
    super({ key, title, imgPath, importance });
    this.level = level;
  };

  getSubtitle() {
    return <StarScale value={this.level}/>;
  };

  getLink() {
    return `/merits/skills/${this.key}`;
  };
};

export default Skill;