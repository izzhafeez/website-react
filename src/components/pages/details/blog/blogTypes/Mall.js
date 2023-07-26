import BlogPost from "../BlogPost";
import MegaIcon from "components/basic/img/MegaIcon";
import MicroIcon from "components/basic/img/MicroIcon";
import MapContainer from "components/map/MapContainer";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { mallStyle } from "./styles";

class Mall extends BlogPost {
  constructor({ latitude, longitude, station, stores, floors, area, date, ...fields }) {
    super({
      type: 'malls',
      ...fields
    });
    this.latitude = latitude;
    this.longitude = longitude;
    this.station = station;
    this.stores = stores;
    this.floors = floors;
    this.area = area;
    this.date = date;
  };

  getImage(isBig) {
    if (this.imgPath === undefined) {
      return "";
    }
    if (isBig) {
      return <MegaIcon imgPath={this.getImgPath()} category={this.category} key={this.key}/>
    }
    return <MicroIcon imgPath={this.getImgPath().replace('malls', 'compressed-malls')} type={this.key}/>;
  }

  getSubtitle() {
    return this.station;
  };

  getFeature() {
    const feature = new Feature({
      geometry: new Point([this.longitude, this.latitude]),
      text: this.title
    });
    feature.setStyle(mallStyle());
    return feature;
  }

  getPage() {
    return <article className='container pt-4 px-4'>
      {this.getImage(true)}
      <div className='text-start'>
        {this.getHeader()}
        {this.getDetails().getParsed()}
        {this.description.getParsed()}
        <h3 className='blog'>LOCATION</h3>
        <MapContainer features={[this.getFeature()]}/>
      </div>
    </article>
  }

  getFields() {
    return ['stores', 'floors', 'area', 'date'];
  }
};

export default Mall;