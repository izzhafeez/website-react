import StarScale from "components/basic/text/star/StarScale";
import Merit from "../Merit";

class Technology extends Merit {
  constructor({ key, title, imgPath, importance, level }) {
    super({ key, title, imgPath, importance });
    this.level = level;
  };

  getSubtitle() {
    return <StarScale value={this.level}/>;
  };

  getLink() {
    return `/merits/technologies/${this.key}`;
  };
};

export default Technology;