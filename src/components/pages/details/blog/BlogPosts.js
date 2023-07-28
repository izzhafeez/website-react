import './style.scss';
import Items from '../Items';
import Sizes from '../Sizes';
import MapContainer from 'components/map/MapContainer';

class BlogPosts extends Items {
  constructor(fields) {
    super({
      category: 'blog',
      ...fields
    });
  }

  getSize() {
    switch (this.type) {
      case 'malls':
        return Sizes.SMALL;
      case 'hikes':
        return Sizes.SMALL;
      default:
        return Sizes.MEDIUM;
    }
  }

  getMap(withoutRelated) {
    const features = this.items
      .map(item => item.getFeatures(withoutRelated))
      .flat(1);
    return <section className=''>
      <h3 className='blog'>MAP</h3>
      <MapContainer features={features}/>
    </section>;
  }
}

export default BlogPosts;