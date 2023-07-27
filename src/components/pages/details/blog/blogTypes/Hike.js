import BlogPost from "../BlogPost";
import MapContainer from "components/map/MapContainer";
import { Feature } from "ol";
import { LineString } from "ol/geom";
import { hikeStyle } from "./styles";
import routesData from "data/blog/hikes/processed.json";
import { roundTo1dp } from "common/number";

class Hike extends BlogPost {
  constructor({ date, ...fields }) {
    super({
      type: 'hikes',
      ...fields
    });
    console.log(this.key);
    this.date = date;
    const data = routesData[this.key];
    const { route, length } = !!data ? data : {};
    this.importance = length;
    this.route = route;
    this.length = `${roundTo1dp(length)}km`;
  };

  getSubtitle() {
    return `${this.date} | ${this.length}`;
  };

  getFeature() {
    const feature = new Feature({
      geometry: new LineString(this.route),
      text: this.title,
      style: hikeStyle,
    });
    feature.setStyle(feature.get('style')(false));
    return feature;
  }

  getPage() {
    return <article className='container pt-4 px-4'>
      {this.getImage(true)}
      <div className='text-start'>
        {this.getHeader()}
        {this.getDetails().getParsed()}
        {this.description.getParsed()}
        <h3 className='blog'>PATH</h3>
        <MapContainer features={[this.getFeature()]}/>
      </div>
    </article>
  }

  getFields() {
    return ['date', 'length'];
  }
};

export default Hike;