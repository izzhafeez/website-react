import Merit from "../Merit";

class Certificate extends Merit {
  constructor({ key, title, imgPath, importance, issuer, date, link }) {
    super({ key, title, imgPath, importance });
    this.date = date;
    this.issuer = issuer;
    this.link = link;
  };

  getSubtitle() {
    const subtitleFields = [ this.issuer, this.date ].filter(field => field);
    return subtitleFields.join(' | ');
  };

  getLink() {
    return this.link;
  };
};

export default Certificate;