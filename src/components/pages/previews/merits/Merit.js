import GoldStar from 'components/basic/text/star/GoldStar';
import '../style.scss';
import './style.scss';

class Merit {
  constructor({ key, title, imgPath, importance }) {
    this.key = key;
    this.title = title;
    this.imgPath = imgPath;
    this.importance = importance || 0;
  };

  getImage(isBig) {
    if (this.imgPath === undefined) {
      return "";
    }

    if (isBig) {
      return <img
        src={'/img/png/'+this.imgPath}
        alt={this.key}
        className='img-fluid rounded-circle border border-dark bg-white macro-icon'
      />;
    }

    return <img
      src={'/img/png/'+this.imgPath}
      alt={this.key}
      className='img-fluid rounded-circle border border-dark bg-white micro-icon'
    />;
  }

  getSubtitle() {
    return this.title;
  };

  getLink() {
    return '/';
  }

  getHyperlink() {
    if (this.getLink() === undefined) {
      return this.title;
    }

    return <a
      href={this.getLink()}
      className='link-body-emphasis link-underline-opacity-50 link-underline-opacity-100-hover'
    >
      {this.title}
    </a>;
  }

  getStar() {
    if (this.importance >= 8) {
      return <GoldStar/>;
    }
    
    return '';
  }

  getPreview() {
    return <article className='container border border-info merit row align-items-center'>
      <div className='col-auto card-header'>
        {this.getImage(false)}
      </div>
      <section className='col text-start'>
        <h6 className='card-title'>
          {this.getHyperlink()}
          &nbsp;
          {this.getStar()}
        </h6>
        <small className='card-subtitle'>{this.getSubtitle()}</small>
      </section>
    </article>;
  };
  
  getPage() {
    return <article className='container col'>
      <div className='row align-items-center p-2'>
        {this.getImage(true)}
      </div>
    </article>
  };
}

export default Merit;