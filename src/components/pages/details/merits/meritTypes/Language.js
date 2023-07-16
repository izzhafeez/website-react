import StarScale from "components/basic/text/star/StarScale";
import Merit from "../Merit";

class Language extends Merit {
  constructor({ proficiency, date, ...fields }) {
    super({
      type: 'languages',
      ...fields
    });
    this.proficiency = proficiency;
    this.date = date;
  };

  getSubtitle() {
    return this.proficiency !== undefined ? <StarScale value={this.proficiency}/> : <></>;
  };

  getFields() {
    return ['proficiency', 'date'];
  }
};

export default Language;