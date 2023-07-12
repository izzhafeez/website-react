class Items {
  constructor({ type, data, limit, isHome }) {
    this.type = type;
    this.data = data;
    this.limit = limit;
    this.isHome = isHome;
    this.items = this.getItems();
  }

  getItems() {
    return [];
  }

  getPath() {
    return '';
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
    return '';
  }

  getHeader() {
    return <h3 className='mt-2'>
      <span>{this.getLink()} {this.getReturnButton()}</span>
    </h3>;
  };

  getItem(item) {
    return <div
      key={item.key}
    >
      {item.getPreview()}
    </div>;
  }

  getClassNames() {
    return '';
  }

  getPreview(withHeader) {
    return <div className='text-start ps-4' key={this.type}>
      <header className='align-items-center'>
        {withHeader && this.getHeader()}
      </header>
      <div className='container'>
        <div className={this.getClassNames()}>
          {this.items.map(this.getItem)}
        </div>
      </div>
    </div>
  }
}

export default Items;