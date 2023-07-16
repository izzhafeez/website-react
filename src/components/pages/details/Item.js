import GoldStar from "components/basic/text/star/GoldStar";
import Description from "../descriptions/Description";
import MacroIcon from "components/basic/img/MacroIcon";
import MicroIcon from "components/basic/img/MicroIcon";

class Item {
  constructor({ key, category, type, title, imgPath, importance, description, related }) {
    this.key = key;
    this.category = category;
    this.type = type;
    this.title = title;
    this.imgPath = imgPath;
    this.importance = importance || 0;
    this.description = new Description(description);
    this.related = related || [];
  };

  getImgPath() {
    return `${this.category}/${this.type}/${this.imgPath}`;
  }

  getImage(isBig) {
    if (this.imgPath === undefined) {
      return "";
    }
    if (isBig) {
      return <MacroIcon imgPath={this.getImgPath()} type={this.key}/>
    }
    return <MicroIcon imgPath={this.getImgPath()} type={this.key}/>;
  }

  getTitle() {
    return this.title;
  }

  getSubtitle() {
    return '';
  };

  getLink() {
    return `/${this.category}/${this.type}/${this.key}`;
  }

  getHyperlink() {
    if (this.getLink() === undefined) {
      return this.getTitle;
    }

    return <a
      href={this.getLink()}
      className='link-body-emphasis link-underline-opacity-50 link-underline-opacity-100-hover'
    >
      {this.getTitle()}
    </a>;
  }

  isStarred() {
    return this.importance >= 8;
  }

  getStar() {
    // adds a star if the item is starred.
    if (this.isStarred()) {
      return <GoldStar/>;
    }
    return '';
  }

  isLarge() {
    return false;
  }

  getClassNames() {
    // class names for the preview element.
    let classNames = this.category + ' container row align-items-center preview';
    if (this.isLarge()) {
      classNames += '-lg';
    }
    if (this.isStarred()) {
      classNames += ' starred';
    }
    return classNames;
  }

  getPreview() {
    // the small rectangle with brief information.
    return <article className={this.getClassNames()}>
      {this.getImage(false)}
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

  getHeader() {
    // the header for the item's page.
    return <header>
      <h2 className='display-6'>
        {this.getTitle().toUpperCase()}
      </h2>
    </header>
  }

  getFields() {
    // fields to include in the item's page.
    return [];
  }

  getDetails() {
    // converts the item's fields into information sections on the page.
    return new Description(
      this.getFields().map(field => ({
        title: field,
        text: this[field]
      })).filter(field => field.text !== undefined)
    );
  }

  getBackLink() {
    // the link back to the parent.
    return `/${this.category}/${this.type}`;
  }
  
  getPage() {
    // element for the page view for the item.
    return <article className='container p-4'>
      {this.getImage(true)}
      <div className='text-start'>
        {this.getHeader()}
        {this.getDetails().getParsed()}
        {this.description.getParsed()}
        <h3>
          <a href={this.getBackLink()} className='link-body-emphasis'>
            GO BACK
          </a>
        </h3>
      </div>
    </article>
  };
}

export default Item;