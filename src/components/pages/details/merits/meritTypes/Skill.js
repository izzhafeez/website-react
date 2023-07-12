import StarScale from "components/basic/text/star/StarScale";
import Merit from "../Merit";

class Skill extends Merit {
  constructor({ proficiency, ...fields }) {
    super(fields);
    this.proficiency = proficiency;
  };

  getSubtitle() {
    return this.proficiency !== undefined ? <StarScale value={this.proficiency}/> : <></>;
  };

  getLink() {
    return `/merits/skills/${this.key}`;
  };

  getFields() {
    return ['proficiency'];
  }
};

export default Skill;