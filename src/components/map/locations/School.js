import Location from "./Location";

class School extends Location {
  constructor({ level, ...fields }) {
    super(fields);
    this.level = level;
  };

  getColor() {
    if (!this.level) {
      return 'WHITE';
    }
    switch (this.level) {
      case 'Primary':
        return 'GREEN_BG';
      case 'Secondary': 
        return 'GREEN_LIGHT';
      case 'Tertiary':
        return 'GREEN_DARK';
      default:
        return 'GREEN';
    }
  }
};

export default School;