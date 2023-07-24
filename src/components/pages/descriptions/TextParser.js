import { Link } from 'react-router-dom';
import './style.scss';

const LINK_REGEX = /<<(.*?)<\/>/ig;
const BOLD_REGEX = /\*\*/ig;

const parse = (text, index) => {
  return <p key={index}>{parseLinks(text)}</p>;
};

export const removeFormatting = (text) => {
  return text.replace(BOLD_REGEX, '').replace(/<<(.*?)>>/ig, '').replace(/<\/>/ig, '');
}

const parseLinks = (text) => {
  return text.split(LINK_REGEX).map((segment, index) => {
    if (index % 2 === 0) {
      return <span key={index}>{parseBold(segment)}</span>;
    }
    const [link, label] = segment.split(">>");
    const category = getCategoryFromLink(link);
    return <Link to={link} key={index} className={`desc-link ${category}`}>{parseBold(label)}</Link>;
  });
};

const getCategoryFromLink = (link) => {
  const possibleCategories = ['merits', 'projects', 'blog'];
  for (let cat of possibleCategories) {
    if (link.includes(cat)) {
      return cat;
    }
  }

  return 'no-category';
}

const parseBold = (text) => {
  return text.split(BOLD_REGEX).map((segment, index) => {
    if (index % 2 === 0) {
      return <span key={index}>{segment}</span>;
    }
    return <b key={index}>{segment}</b>;
  });
}

export default parse;