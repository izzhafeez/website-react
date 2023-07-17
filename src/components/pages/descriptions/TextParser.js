import { Link } from 'react-router-dom';
import './style.scss';

const parse = (text, index) => {
  return <p key={index}>{parseLinks(text)}</p>;
};

const parseLinks = (text) => {
  const linkRegex = /<<(.*?)<\/>/ig;
  return text.split(linkRegex).map((segment, index) => {
    if (index % 2 === 0) {
      return <span key={index}>{parseBold(segment)}</span>;
    }
    const [link, label] = segment.split(">>");
    const category = getCategoryFromLink(link);
    return <Link to={link} key={index} className={`desc-link ${category}`}>{parseBold(label)}</Link>;
  });
};

const getCategoryFromLink = (link) => {
  const possibleCategories = ['merits', 'projects'];
  for (let cat of possibleCategories) {
    if (link.includes(cat)) {
      return cat;
    }
  }

  return '';
}

const parseBold = (text) => {
  const boldRegex = /\*\*/ig;

  return text.split(boldRegex).map((segment, index) => {
    if (index % 2 === 0) {
      return <span key={index}>{segment}</span>;
    }
    return <b key={index}>{segment}</b>;
  });
}

export default parse;