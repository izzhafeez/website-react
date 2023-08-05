import Route from "./Route";
import { Location } from "../locations";

class BusRoute extends Route {
  constructor({ serviceNo, points }) {
    super({
      title: `Bus ${serviceNo}`,
      route: points
    });
  }

  getFeatures() {
    return this.route.map(([lng, lat]) => new Location({
      title: this.title,
      latitude: lat,
      longitude: lng
    }).getFeature());
  }
};

export default BusRoute;