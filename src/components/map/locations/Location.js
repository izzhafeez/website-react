import { Feature } from "ol";
import { Point } from "ol/geom";
import { pointStyle } from "./styles";

class Location {
  constructor({ title, latitude, longitude }) {
    this.title = title.replace(/__.*/gi, '');
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getText() {
    return this.title;
  }

  getColor() {
    return 'WHITE';
  }

  getStyle() {
    return pointStyle;
  }

  getFeature() {
    const feature = new Feature({
      geometry: new Point([this.longitude, this.latitude]),
      text: this.getText(),
      style: this.getStyle()(this.getColor())
    });
    feature.setStyle(feature.get('style')());
    return feature;
  }
};

export default Location;