import { parseLinkSection, parseParagraphSection, parseProficiency } from "./SectionParser";

class Description {
  constructor({ description, category }) {
    this.description = typeof description === 'string'
      ? [{ text: description }]
      : description;
    this.category = category;
  };

  getParsed() {
    if (this.description === undefined) {
      return <></>;
    }

    return this.description.map(parseSection(this.category));
  };
};

const parseSection = category => descriptionSection => {
  const title = descriptionSection.title;
  const text = descriptionSection.text;

  switch (title) {
    case 'link':
      return parseLinkSection(text, category);
    case 'proficiency':
    case 'complexity':
      return parseProficiency(title, text, category);
    default:
      return parseParagraphSection(title, text, category);
  }
}

export default Description;