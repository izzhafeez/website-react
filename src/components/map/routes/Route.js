import { Feature } from "ol";
import { LineString } from "ol/geom";
import routeStyle from "./style";

class Route {
  constructor({ title, route, length }) {
    this.title = title;
    this.route = route;
    this.length = length;
  }

  getColor() {
    return 'WHITE';
  }

  getFeature() {
    const feature = new Feature({
      geometry: new LineString(this.route),
      text: `
        <b>${this.title}</b><br/>
        Distance: ${this.length}
      `,
      style: routeStyle(this.getColor()),
    });
    feature.setStyle(feature.get('style')());
    return feature;
  }
};

export default Route;