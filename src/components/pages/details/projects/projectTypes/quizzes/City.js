import { Feature } from "ol";
import { Point } from "ol/geom";
import Project from "../../Project";
import { pointStyle } from "components/pages/details/blog/blogTypes/styles";

class City extends Project {
  constructor({ latitude, longitude, population, ...fields }) {
    super({
      type: 'cities',
      ...fields
    });
    this.title = this.title.replace(/__.*/gi, '');
    this.latitude = latitude;
    this.longitude = longitude;
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

export default City;