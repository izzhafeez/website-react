import Location from "./Location";

class Mall extends Location {
  constructor({ station, stores, floors, area, date, aesthetics, ...fields }) {
    super(fields);
    this.station = station;
    this.stores = stores;
    this.floors = floors;
    this.area = area;
    this.date = date;
    this.color = this.getColor();
    this.aesthetics = aesthetics;
    this.importance = !!aesthetics ? aesthetics : 0;
  };

  getColor() {
    if (!this.stores) {
      return 'WHITE';
    }
    switch (true) {
      case (this.stores < 80):
        return 'PURPLE_BG';
      case (this.stores < 150):
        return 'PURPLE_V_LIGHT';
      case (this.stores < 250):
        return 'PURPLE_LIGHT';
      case (this.stores < 350):
        return 'PURPLE';
      default:
        return 'PURPLE_DARK';
    }
  }
};

export default Mall;