import GoldStar from "components/basic/text/star/GoldStar";
import Description from "../descriptions/Description";
import MacroIcon from "components/basic/img/MacroIcon";
import MicroIcon from "components/basic/img/MicroIcon";

class Item {
  constructor({ key, title, imgPath, importance, description, related }) {
    this.key = key;
    this.title = title;
    this.imgPath = imgPath;
    this.importance = importance || 0;
    this.description = new Description(description);
    this.related = related || [];
  };

  getImage(isBig) {
    if (this.imgPath === undefined) {
      return "";
    }
    if (isBig) {
      return <MacroIcon imgPath={this.imgPath} type={this.key}/>
    }
    return <MicroIcon imgPath={this.imgPath} type={this.key}/>;
  }

  getTitle() {
    return this.title;
  }

  getSubtitle() {
    return this.title;
  };

  getLink() {
    return '/';
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

  getClassNames() {
    // class names for the preview element.
    return '';
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

  getBackLink(_) {
    // the link back to the parent.
    return '';
  }
  
  getPage(type) {
    // element for the page view for the item.
    return <article className='container p-4'>
      {this.getImage(true)}
      <div className='text-start'>
        {this.getHeader()}
        {this.getDetails().getParsed()}
        {this.description.getParsed()}
        <h3>
          <a href={this.getBackLink(type)} className='link-body-emphasis'>
            GO BACK
          </a>
        </h3>
      </div>
    </article>
  };
}

export default Item;