import StarScale from "components/basic/text/star/StarScale";
import Merit from "../Merit";

class Language extends Merit {
  constructor({ proficiency, date, ...fields }) {
    super(fields);
    this.proficiency = proficiency;
    this.date = date;
  };

  getSubtitle() {
    return this.proficiency !== undefined ? <StarScale value={this.proficiency}/> : <></>;
  };

  getLink() {
    return `/merits/languages/${this.key}`;
  };

  getFields() {
    return ['proficiency', 'date'];
  }
};

export default Language;