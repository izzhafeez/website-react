import Merit from "../Merit";

class Award extends Merit {
  constructor({ date, level, link, ...fields }) {
    super(fields);
    this.date = date;
    this.level = level;
    this.link = link;
  };

  getSubtitle() {
    const subtitleFields = [ this.level, this.date ].filter(field => field);
    return subtitleFields.join(' | ');
  };

  getLink() {
    return `/merits/awards/${this.key}`;
  };

  getFields() {
    return ['date', 'level', 'link'];
  }
};

export default Award;