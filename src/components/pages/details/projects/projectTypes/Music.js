import Project from "../Project";

class Music extends Project {
  constructor({ proficiency, artist, ...fields }) {
    super(fields);
    this.artist = artist;
  };

  getSubtitle() {
    return this.artist;
  };

  getLink() {
    return `/projects/music/${this.key}`;
  };

  getFields() {
    return ['artist'];
  }
};

export default Music;