import Route from "./Route";
import { Location } from "../locations";
import busStops from "data/projects/json/quizzes/bus-stops.json";

class BusRoute extends Route {
  constructor({ serviceNo, points }) {
    super({
      title: `Bus ${serviceNo}`,
      route: points
    });
  }

  getFeatures() {
    return this.route.map((id) => {
      const stop = busStops[id]
      return new Location({
        title: stop.desc,
        latitude: stop.lat,
        longitude: stop.lng
      }).getFeature();
    })
  }
};

export default BusRoute;