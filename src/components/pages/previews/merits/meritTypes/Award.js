import Merit from "../Merit";

class Award extends Merit {
  constructor({ key, title, imgPath, importance, date, level }) {
    super({ key, title, imgPath, importance });
    this.date = date;
    this.level = level;
  };

  getSubtitle() {
    const subtitleFields = [ this.level, this.date ].filter(field => field);
    return subtitleFields.join(' | ');
  };

  getLink() {
    return `/merits/awards/${this.key}`;
  };
};

export default Award;