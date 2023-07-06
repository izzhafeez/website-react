class Description {
  constructor(description) {
    this.description = description;
  };

  getParsed() {
    this.description.map(descriptionSection => {
      const title = descriptionSection.title;
      const text = descriptionSection.title;
      const paragraphs = text.split('\n');

      return <section>
        <h5>{title}</h5>
        {paragraphs.map(paragraph => <p>{paragraph}</p>)}
      </section>
    })
  };
};

export default Description;