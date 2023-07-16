import Merit from "../Merit";

class Certificate extends Merit {
  constructor({ issuer, date, link, ...fields }) {
    super({
      type: 'certificates',
      ...fields
    });
    this.date = date;
    this.issuer = issuer;
    this.link = link;
  };

  getSubtitle() {
    const subtitleFields = [ this.issuer, this.date ].filter(field => field);
    return subtitleFields.join(' | ');
  };

  getFields() {
    return ['date', 'issuer', 'link'];
  }
};

export default Certificate;