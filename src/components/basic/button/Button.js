class Button {
  constructor({ link, text, className }) {
    this.link = link;
    this.text = text;
    this.className = className;
  }

  getClassName() {
    return `${this.className} btn button`;
  }

  getElement() {
    return <a
      role='button'
      href={this.link}
      className={this.getClassName()}
    >
      <i className="fa fa-external-link"></i>&nbsp;
      {this.text}
    </a>
  }
};

export default Button;