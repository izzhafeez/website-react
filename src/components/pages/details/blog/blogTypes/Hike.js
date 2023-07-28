import BlogPost from "../BlogPost";
import MapContainer from "components/map/MapContainer";
import { Feature } from "ol";
import { LineString, Point } from "ol/geom";
import { hikeStyle, numberStyle, pointStyle } from "./styles";
import routesData from "data/blog/hikes/processed.json";
import mallsData from "data/blog/json/malls.json";
import { roundTo1dp } from "common/number";
import Mall from "./Mall";

class Hike extends BlogPost {
  constructor({ date, start, end, color='BLACK', stops=[], ...fields }) {
    super({
      type: 'hikes',
      ...fields
    });
    this.date = date;
    const data = routesData[this.key];
    const { route, length } = !!data ? data : {};
    this.importance = length;
    this.route = route;
    this.length = !!length ? `${roundTo1dp(length)}km` : undefined;
    this.start = start;
    this.end = end;
    this.color = color;
    this.stops = stops;
  };

  getSubtitle() {
    const fields = [this.date, this.length].filter(x => !!x);
    return fields.join(' | ');
  };

  getFeatures(withoutRelated) {
    return [
      this.getLineFeature(),
      this.getStartFeature(),
      this.getEndFeature(),
      ...this.getStopFeatures(),
      ...(withoutRelated ? [] : this.getMallFeatures())
    ];
  }

  getMallFeatures() {
    return this.related
      .filter(x => x.type === 'malls')
      .map(x => 
        x.items.map(y => {
          const mall = new Mall(mallsData[y]);
          return mall.getFeature();
        })
      )
      .flat(1);
  }

  getStopFeatures() {
    return this.stops.map(({ name, lat, lng }, index) => {
      const feature = new Feature({
        geometry: new Point([lng, lat]),
        text: `
          <b>${this.title}</b><br/>
          Stop ${index+1}: ${name}
        `,
        style: numberStyle(this.color)(index)
      });
      feature.setStyle(feature.get('style')());
      return feature;
    })
  }

  getLineFeature() {
    const feature = new Feature({
      geometry: new LineString(this.route),
      text: `
        <b>${this.title}</b><br/>
        Distance: ${this.length}
      `,
      style: hikeStyle(this.color),
    });
    feature.setStyle(feature.get('style')(false));
    return feature;
  }

  getStartFeature() {
    const feature = new Feature({
      geometry: new Point(this.route[0]),
      text: `
        <b>${this.title}</b><br/>
        Start: ${this.start}
      `,
      style: pointStyle(this.color)
    });
    feature.setStyle(feature.get('style')());
    return feature;
  }

  getEndFeature() {
    const feature = new Feature({
      geometry: new Point(this.route[this.route.length - 1]),
      text: `
        <b>${this.title}</b><br/>
        End: ${this.end}
      `,
      style: pointStyle(this.color)
    });
    feature.setStyle(feature.get('style')());
    return feature;
  }

  getMap(withoutRelated) {
    return <section>
      <h3 className='blog'>PATH</h3>
      <MapContainer features={this.getFeatures(withoutRelated)}/>
    </section>
  }

  getFields() {
    return ['date', 'length'];
  }
};

export default Hike;