import { Link } from 'react-router-dom';

const parse = (text, index) => {
  return <p key={index}>{parseLinks(text)}</p>;
};

const parseLinks = (text) => {
  const linkRegex = /<<(.*?)<\/>/ig;
  return text.split(linkRegex).map((segment, index) => {
    if (index % 2 === 0) {
      return <span key={index}>{parseBold(segment)}</span>;
    }
    const [link, label] = segment.split(">>")
    return <Link to={link} key={index}>{parseBold(label)}</Link>;
  });
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