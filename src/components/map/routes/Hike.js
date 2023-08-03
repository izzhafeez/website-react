import Route from "./Route";

class Hike extends Route {
  constructor({ color, ...fields }) {
    super(fields);
    this.color = color;
  }

  getColor() {
    return this.color;
  }
};

export default Hike;