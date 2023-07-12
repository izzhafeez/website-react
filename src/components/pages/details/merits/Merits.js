import MeritFactory from 'components/pages/details/merits/MeritFactory';
import './style.scss';
import Items from '../Items';

class Merits extends Items {
  getItems() {
    const constructor = MeritFactory.getConstructor(this.type);
    let items = MeritFactory.getList(this.data, constructor);
    const seeMore = constructor({ key: '', title: 'See More', link: this.getPath() });
    items = items.slice(0, this.limit);
    if (items.length > this.limit) {
      items.push(seeMore);
    }
    return items;
  }

  getPath() {
    return `/merits/${this.type}`;
  };

  getReturnButton() {
    if (this.isHome) {
      return <></>;
    }

    return <span>
      (<a href='/merits' className='link-body-emphasis'>GO BACK</a>)
    </span>;
  }

  getClassNames() {
    switch (this.type) {
      case 'technologies':
      case 'languages':
      case 'skills':
        return 'row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-2'
      case 'experiences':
        return 'row row-cols-lg-2 row-cols-1 g-2'
      default:
        return 'row row-cols-xl-3 row-cols-lg-2 row-cols-1 g-2'
    }
  }
}

export default Merits;