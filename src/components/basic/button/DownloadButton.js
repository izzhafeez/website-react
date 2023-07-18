import Button from "./Button";
import './style.scss';

class DownloadButton extends Button {
  constructor(fields) {
    super({
      ...fields,
      className: 'btn-info'
    })
  }

  getElement() {
    return <a
      role='button'
      href={this.link}
      className={`${this.getClassName()}`}
      download
    >
      <i class="fa fa-download"></i>&nbsp;
      {this.text}
    </a>;
  }
};

export default DownloadButton;