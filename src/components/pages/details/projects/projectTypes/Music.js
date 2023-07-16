import Project from "../Project";

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
        <h3><a href={`/music/${this.title}.pdf`} download>DOWNLOAD SHEET MUSIC</a></h3>
        <h3><a href={`/music/${this.title}.mp3`} download>DOWNLOAD MP3</a></h3>
        <h3><a href={this.link}>WATCH VIDEO ON YOUTUBE</a></h3>
        <h3>
          <a href={this.getBackLink(type)} className='link-body-emphasis'>
            GO BACK
          </a>
        </h3>
      </div>
    </article>
  };
};

export default Music;