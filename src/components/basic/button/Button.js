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
      {this.text}
    </a>
  }
};

export default Button;