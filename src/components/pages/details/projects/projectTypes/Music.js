import DownloadButton from "components/basic/button/DownloadButton";
import Project from "../Project";
import YoutubeButton from "components/basic/button/YoutubeButton";

class Music extends Project {
  constructor({ artist, link, imgPath, ...fields }) {
    super({
      ...fields,
      imgPath: imgPath === undefined ? 'music.svg' : imgPath,
      type: 'music'
    });
    this.artist = artist;
    this.link = link;

    if (this.artist === undefined) {
      this.imgPath = undefined;
    }
  };

  getSubtitle() {
    return this.artist;
  };

  getFields() {
    return ['artist'];
  }

  getPage(type) {
    // element for the page view for the item.
    return <article className='container p-4'>
      {this.getImage(true)}
      <div className='text-start'>
        {this.getHeader()}
        {this.getDetails().getParsed()}
        {this.description.getParsed()}
        <section id='buttons' className='row'>
          <div className='col-auto'>
            {new DownloadButton({ link: `/music/${this.title}.pdf`, text: 'Sheet Music'}).getElement()}
          </div>
          <div className='col-auto'>
            {new DownloadButton({ link: `/music/${this.title}.mp3`, text: 'MP3'}).getElement()}
          </div>
          <div className='col-auto'>
            {new YoutubeButton({ link: this.link }).getElement()}
          </div>
        </section>
      </div>
    </article>
  };
};

export default Music;