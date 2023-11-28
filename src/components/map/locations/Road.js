import Location from "./Location";

class Road extends Location {
  constructor({ dist, ...fields }) {
    super(fields);
    this.dist = dist;
  };

  getColor() {
    if (!this.dist) {
      return 'WHITE';
    }
    switch (true) {
      case (this.dist < 200):
        return 'PURPLE_BG';
      case (this.dist < 500):
        return 'PURPLE_V_LIGHT';
      case (this.dist < 2000):
        return 'PURPLE_LIGHT';
      case (this.dist < 5000):
        return 'PURPLE';
      default:
        return 'PURPLE_DARK';
    }
  }
};

export default Road;