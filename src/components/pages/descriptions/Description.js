import { parseLinkSection, parseParagraphSection, parseProficiency, parseRaw } from "./SectionParser";

class Description {
  constructor({ description, category }) {
    this.description = typeof description === 'string'
      ? [{ text: description }]
      : description;
    this.category = category;
  };

  getParsed(isRaw) {
    if (this.description === undefined) {
      return <></>;
    }

    const mapped = this.description.map(parseSection(this.category)(isRaw));
    if (isRaw) {
      return mapped.join(' ');
    }
    return mapped;
  };
};

const parseSection = category => isRaw => descriptionSection => {
  const title = descriptionSection.title;
  const text = descriptionSection.text;

  if (isRaw) {
    return parseRaw(text);
  }

  switch (title) {
    case 'link':
      return parseLinkSection(text, category, 'Visit Site');
    case 'repo':
      return parseLinkSection(text, category, 'Visit Repository');
    case 'proficiency':
    case 'complexity':
      return parseProficiency(title, text, category);
    default:
      return parseParagraphSection(title, text, category);
  }
}

export default Description;