import StarScale from "components/basic/text/star/StarScale";
import Merit from "../Merit";

class Skill extends Merit {
  constructor({ proficiency, ...fields }) {
    super({
      type: 'skills',
      ...fields
    });
    this.proficiency = proficiency;
  };

  getSubtitle() {
    return this.proficiency !== undefined ? <StarScale value={this.proficiency}/> : <></>;
  };

  getFields() {
    return ['proficiency'];
  }
};

export default Skill;