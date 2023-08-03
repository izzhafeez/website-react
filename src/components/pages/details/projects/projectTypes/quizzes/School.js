import { Feature } from "ol";
import Project from "../../Project";
import { pointStyle } from "components/pages/details/blog/blogTypes/styles";
import { Point } from "ol/geom";

class School extends Project {
  constructor({ latitude, longitude, level, ...fields }) {
    super({
      type: 'schools',
      ...fields
    });
    this.title = this.title.replace(/__.*/gi, '');
    this.latitude = latitude;
    this.longitude = longitude;
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

export default School;