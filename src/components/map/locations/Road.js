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
        return 'CYAN_BG';
      case (this.dist < 500):
        return 'CYAN_V_LIGHT';
      case (this.dist < 2000):
        return 'CYAN_LIGHT';
      case (this.dist < 5000):
        return 'CYAN';
      default:
        return 'CYAN_DARK';
    }
  }
};

export default Road;