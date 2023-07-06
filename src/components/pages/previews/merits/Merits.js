import MeritFactory from 'components/pages/previews/merits/MeritFactory';
import './style.scss';

class Merits {
  constructor({ type, data, limit, isHome }) {
    this.type = type;
    this.data = data;
    this.limit = limit;
    this.isHome = isHome;

    const constructor = MeritFactory.getConstructor(type);
    const merits = MeritFactory.getList(data, constructor);
    this.merits = merits.slice(0, limit);
    if (merits.length > limit) {
      this.merits.push(constructor({ key: '', title: 'See More', link: this.getLink() }));
    }
  }

  getLink() {
    return `/merits/${this.type}`;
  };

  getHeader() {
    return <h3 className='col px-0 pt-2 row'>
      <a href={this.getLink()} className='col link-body-emphasis link-underline-opacity-50 link-underline-opacity-100-hover'>
        {this.type.toUpperCase()}
      </a>
      {!this.isHome && <a href='/merits' className='col-auto btn btn-info link-body-emphasis'>
        RETURN
      </a>}
    </h3>;
  };

  getMerit(merit) {
    return <div
      className='col'
      key={merit.key}
    >
      {merit.getPreview()}
    </div>;
  }

  getPreview(withHeader) {
    return <div className='container text-start' key={this.type}>
      <header className='row align-items-center'>
        {withHeader && this.getHeader()}
      </header>
      <div className='row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-2'>
        {this.merits.map(this.getMerit)}
      </div>
    </div>
  }
}

export default Merits;