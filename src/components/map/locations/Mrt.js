import Location from "./Location";

class Mrt extends Location {
  constructor({ label, ...fields }) {
    super(fields);
    this.line = label.substring(0, 2);
  };

  getColor() {
    switch (this.line) {
      case 'EW':
      case 'CG':
        return 'GREEN';
      case 'NS':
        return 'RED';
      case 'NE':
        return 'PURPLE';
      case 'CC':
      case 'CE':
        return 'YELLOW';
      case 'DT':
        return 'BLUE';
      case 'TE':
        return 'BROWN';
      case 'JE':
      case 'JS':
      case 'JW':
        return 'CYAN';
      case 'CP':
      case 'CR':
        return 'BRIGHT_GREEN';
      case 'BP':
      case 'SW':
      case 'SE':
      case 'PW':
      case 'PE':
      case 'ST':
      case 'PT':
        return 'GREY';
      default:
        return 'WHITE';
    }
  }
};

export default Mrt;