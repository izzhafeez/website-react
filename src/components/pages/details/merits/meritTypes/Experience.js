import Merit from '../Merit';

class Experience extends Merit {
  constructor({ startDate, endDate, organisation, overview, ...fields }) {
    super(fields);
    this.startDate = startDate;
    this.endDate = endDate;
    this.date = this.getDate();
    this.organisation = organisation;
    this.overview = overview;
  };

  getDate() {
    const subtitleFields = [ this.startDate, this.endDate ].filter(field => field);
    return subtitleFields.join(' - ');
  };

  getLink() {
    return `/merits/experiences/${this.key}`;
  };

  getPreview() {
    let classNames = 'merits container preview-lg border border-info merit row align-items-center';
    if (this.isStarred()) {
      classNames += ' starred';
    }
    return <article className={classNames}>
      {this.getImage(false)}
      <section className='col text-start'>
        <small className='card-subtitle'>{this.getDate()}</small>
        <h5 className='card-title'>
          {this.getHyperlink()}
          &nbsp;
          {this.getStar()}
        </h5>
        <small className='card-subtitle'>{this.organisation}</small>
        <br/>
        <small className='card-subtitle'>{this.overview}</small>
      </section>
    </article>;
  }

  getFields() {
    return ['organisation', 'date'];
  }
};

export default Experience;