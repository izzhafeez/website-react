import Location from "./Location";
import { numberStyle } from "./styles";

class Stop extends Location {
  constructor({ name, index, color, ...fields }) {
    super(fields);
    this.name = name;
    this.index = index;
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  getStyle() {
    return numberStyle(this.index);
  }

  getText() {
    return `
      <b>${this.title}</b><br/>
      Stop ${this.index+1}: ${this.name}
    `
  }
};

export default Stop;