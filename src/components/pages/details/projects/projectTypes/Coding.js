import Project from "../Project";

class Coding extends Project {
  constructor({ date, overview, ...fields }) {
    super({
      type: 'coding',
      ...fields
    });
    this.date = date;
    this.overview = overview;
  };

  getPreview() {
    let classNames = 'projects container preview-lg merit row align-items-center';
    if (this.isStarred()) {
      classNames += ' starred';
    }
    return <article className={classNames}>
      {this.getImage(false)}
      <section className='col text-start'>
        <small className='card-subtitle'>{this.date}</small>
        <h5 className='card-title'>
          {this.getHyperlink()}
          &nbsp;
          {this.getStar()}
        </h5>
        <small className='card-subtitle'>{this.overview}</small>
      </section>
    </article>;
  }

  getFields() {
    return ['date', 'overview'];
  }
};

export default Coding;