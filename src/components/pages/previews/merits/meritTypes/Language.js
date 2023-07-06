import StarScale from "components/basic/text/star/StarScale";
import Merit from "../Merit";

class Language extends Merit {
  constructor({ key, title, imgPath, importance, level }) {
    super({ key, title, imgPath, importance });
    this.level = level;
  };

  getSubtitle() {
    return <StarScale value={this.level}/>;
  };

  getLink() {
    return `/merits/languages/${this.key}`;
  };
};

export default Language;