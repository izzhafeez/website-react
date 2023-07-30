import BlogPost from "../BlogPost";
import MegaIcon from "components/basic/img/MegaIcon";
import MicroIcon from "components/basic/img/MicroIcon";
import MapContainer from "components/map/MapContainer";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { pointStyle } from "./styles";

class Mall extends BlogPost {
  constructor({ latitude, longitude, station, stores, floors, area, date, aesthetics, ...fields }) {
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
    this.color = this.getColor();
    this.aesthetics = aesthetics;
    this.importance = !!aesthetics ? aesthetics : 0;
  };

  getColor() {
    if (!this.stores) {
      return 'WHITE';
    }
    switch (true) {
      case (this.stores < 80):
        return 'PURPLE_BG';
      case (this.stores < 150):
        return 'PURPLE_V_LIGHT';
      case (this.stores < 250):
        return 'PURPLE_LIGHT';
      case (this.stores < 350):
        return 'PURPLE';
      default:
        return 'PURPLE_DARK';
    }
  }

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

  getFeatures() {
    return [this.getFeature()];
  }

  getFeature() {
    const feature = new Feature({
      geometry: new Point([this.longitude, this.latitude]),
      text: this.title,
      style: pointStyle(this.color)
    });
    feature.setStyle(feature.get('style')());
    return feature;
  }

  getMap() {
    return <section>
      <h3 className='blog'>LOCATION</h3>
      <MapContainer category='blog' features={this.getFeatures()}/>
    </section>
  }

  getFields() {
    return ['stores', 'floors', 'area', 'date', 'aesthetics'];
  }
};

export default Mall;