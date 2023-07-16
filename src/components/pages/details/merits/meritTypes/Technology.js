import StarScale from "components/basic/text/star/StarScale";
import Merit from "../Merit";

class Technology extends Merit {
  constructor({ proficiency, ...fields }) {
    super({
      type: 'technologies',
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

export default Technology;