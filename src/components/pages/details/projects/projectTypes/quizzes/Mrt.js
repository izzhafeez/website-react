import { Feature } from "ol";
import { Point } from "ol/geom";
import Project from "../../Project";
import { pointStyle } from "components/pages/details/blog/blogTypes/styles";

class Mrt extends Project {
  constructor({ latitude, longitude, label, ...fields }) {
    super({
      type: 'mrt',
      ...fields
    });
    this.title = this.title.replace(/__.*/gi, '');
    this.latitude = latitude;
    this.longitude = longitude;
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
    }
  }

  getFeature() {
    const feature = new Feature({
      geometry: new Point([this.longitude, this.latitude]),
      text: this.title,
      style: pointStyle(this.getColor())
    });
    feature.setStyle(feature.get('style')());
    return feature;
  }
};

export default Mrt;