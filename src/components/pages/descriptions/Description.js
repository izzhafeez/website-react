import { parseLinkSection, parseParagraphSection, parseProficiency } from "./SectionParser";

class Description {
  constructor(description) {
    this.description = description;
  };

  getParsed() {
    if (this.description === undefined) {
      return <></>;
    }

    return this.description.map(this.parseSection);
  };

  parseSection(descriptionSection) {
    const title = descriptionSection.title;
    const text = descriptionSection.text;

    switch (title) {
      case 'link':
        return parseLinkSection(text);
      case 'proficiency':
        return parseProficiency(text);
      default:
        return parseParagraphSection(title, text);
    }
  };
};

export default Description;