import Location from "./Location";

class City extends Location {
  constructor({ population, ...fields }) {
    super(fields);
    this.population = population;
  };

  getColor() {
    if (!this.population) {
      return 'WHITE';
    }
    switch (true) {
      case this.population < 1000:
        return 'GREEN';
      case this.population < 3000:
        return 'GREEN_LIGHT';
      case this.population < 10000: 
        return 'GREEN_V_LIGHT';
      case this.population < 30000:
        return 'GREEN_BG';
      case this.population < 100000:
        return 'RED_BG';
      case this.population < 300000:
        return 'RED_V_LIGHT';
      case this.population < 1000000:
        return 'RED_LIGHT';
      case this.population < 3000000:
        return 'RED';
      case this.population < 10000000:
        return 'RED_DARK';
      default:
        return 'BLACK';
    }
  }
};

export default City;