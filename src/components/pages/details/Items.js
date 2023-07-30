import ItemFactory from './ItemFactory';
import Sizes from './Sizes';
import './style.scss';

class Items {
  constructor({ category, type, data, limit, isHome }) {
    this.category = category;
    this.type = type;
    this.data = data;
    this.limit = limit;
    this.isHome = isHome;
    this.items = this.getItems();
  }

  getItems() {
    const constructor = ItemFactory.getConstructor(this.category)(this.type);
    // console.log(this.data);
    let items = ItemFactory.getList(this.data, constructor);
    const length = items.length;
    const seeMore = constructor('see-more')({ key: '', title: 'See More', link: this.getPath() });
    items = items.slice(0, this.limit);
    if (length > this.limit) {
      items.push(seeMore);
    }
    return items;
  }

  getPath() {
    return `/${this.category}/${this.type}`;
  };

  getLink() {
    if (!this.isHome) {
      return <span>{this.type.toUpperCase()}</span>;
    }

    return <a href={this.getPath()} className='col link-body-emphasis link-underline-opacity-50 link-underline-opacity-100-hover'>
      {this.type.toUpperCase()}
    </a>
  }

  getReturnButton() {
    if (this.isHome) {
      return <></>;
    }

    return <span>
      (<a href={`/${this.category}`} className='link-body-emphasis'>GO BACK</a>)
    </span>;
  }

  getHeader(withReturnButton) {
    return <h3 className={`mt-2 ${this.category}`}>
      <span>{this.getLink()} {withReturnButton && this.getReturnButton()}</span>
    </h3>;
  };

  getItem(item) {
    return <div
      key={item.key}
    >
      {item.getPreview()}
    </div>;
  }

  getSize() {
    return Sizes.MEDIUM;
  }

  getClassNames() {
    switch (this.getSize()) {
      case Sizes.SMALL: 
        return 'row ms-3 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-2';
      case Sizes.MEDIUM:
        return 'row ms-3 row-cols-xl-3 row-cols-lg-2 row-cols-1 g-2';
      case Sizes.LARGE:
        return 'row ms-3 row-cols-lg-2 row-cols-1 g-2';
      default:
        throw new Error('Size not given');
    }
  }

  getMap() {
    return '';
  }

  getPreview({ withHeader=true, withReturnButton=true, withMap=true }) {
    return <div className='text-start px-2' key={this.type}>
      <header className='align-items-center'>
        {withHeader && this.getHeader(withReturnButton)}
      </header>
      {withMap && this.getMap(true)}
      {withMap && <br/>}
      <div className=''>
        <div className={this.getClassNames()}>
          {this.items.map(this.getItem)}
        </div>
      </div>
    </div>
  }
}

export default Items;