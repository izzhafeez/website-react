import BlogPost from "../BlogPost";
import MegaIcon from "components/basic/img/MegaIcon";
import MicroIcon from "components/basic/img/MicroIcon";
import MapContainer from "components/map/MapContainer";
import Mall from "components/map/locations/Mall";

class MallPost extends BlogPost {
  constructor(fields) {
    super({
      type: 'malls',
      ...fields
    });
    this.mall = new Mall(fields);
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
    return this.mall.station;
  };

  getFeatures() {
    return [this.getFeature()];
  }

  getFeature() {
    return this.mall.getFeature();
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

export default MallPost;