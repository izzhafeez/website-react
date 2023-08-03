import BlogPost from "../BlogPost";
import MapContainer from "components/map/MapContainer";
import { Hike } from "components/map/routes";
import { Feature } from "ol";
import { numberStyle, pointStyle } from "./styles";
import routesData from "data/blog/hikes/processed.json";
import mallsData from "data/blog/json/malls.json";
import { roundTo1dp } from "common/number";
import Mall from "./MallPost";
import { Point } from "ol/geom";
import Stop from "components/map/locations/Stop";

class HikePost extends BlogPost {
  constructor({ date, start, end, color='BLACK', stops=[], ...fields }) {
    super({
      type: 'hikes',
      ...fields
    });
    this.date = date;
    const data = routesData[this.key];
    const { route, length } = !!data ? data : {};
    this.importance = !!length ? length : 0;
    this.route = route;
    this.length = !!length ? `${roundTo1dp(length)}km` : undefined;
    this.start = start;
    this.end = end;
    this.color = color;
    this.stopFeatures = stops.map((p, i) => new Stop({
        title: this.title,
        name: p.name,
        index: i,
        latitude: p.lat,
        longitude: p.lng,
        color: color
      }).getFeature()
    );
    this.hike = new Hike({
      color: color,
      title: this.title,
      route: route,
      length: length
    });
  };

  getSubtitle() {
    const fields = [this.date, this.length].filter(x => !!x);
    return fields.join(' | ');
  };

  getFeatures(withoutRelated) {
    return [
      this.hike.getFeature(),
      this.getStartFeature(),
      this.getEndFeature(),
      ...this.stopFeatures,
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
      <MapContainer category='blog' features={this.getFeatures(withoutRelated)}/>
    </section>
  }

  getFields() {
    return ['date', 'length'];
  }
};

export default HikePost;