import Merit from '../Merit';

class Experience extends Merit {
  constructor({ key, title, imgPath, importance, startDate, endDate }) {
    super({ key, title, imgPath, importance });
    this.startDate = startDate;
    this.endDate = endDate;
  };

  getSubtitle() {
    const subtitleFields = [ this.startDate, this.endDate ].filter(field => field);
    return subtitleFields.join(' - ');
  };

  getLink() {
    return `/merits/experience/${this.key}`;
  };
};

export default Experience;