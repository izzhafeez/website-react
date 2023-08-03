import { Feature } from "ol";
import { Point } from "ol/geom";
import Project from "../../Project";
import { pointStyle } from "components/pages/details/blog/blogTypes/styles";

class BusRoute extends Project {
  constructor({ service, latlongs, ...fields }) {
    super({
      type: 'routes',
      ...fields
    });
    this.title = service;
  };

  getColor() {
    return 'CYAN';
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

export default BusRoute;