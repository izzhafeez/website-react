import Button from "./Button";

class YoutubeButton extends Button {
  constructor(fields) {
    super({
      ...fields,
      className: 'btn-danger'
    })
  }

  getElement() {
    return <a
      role='button'
      href={this.link}
      className={`${this.getClassName()}`}
      download
    >
      {/* <img src='/img/icons/download.svg' className='download col-auto'/> */}
      <i class="fa fa-youtube"></i>&nbsp;
      YouTube
    </a>;
  }
};

export default YoutubeButton;