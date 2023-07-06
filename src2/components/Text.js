import { Link } from 'react-router-dom';

import './Text.css';

function Text(props) {
  const paragraphs = props.content.map((paragraph) => {
    const parts = paragraph.map((part) => {
      if (part[0] === "link") {
        if (part[3]) {
          return <a href={part[1]}>{part[2]}</a>;
        }
        return <Link to={part[1]}>{part[2]}</Link>;
      } else if (part[0] === "span") {
        return <span className={part[1]}>{part[2]}</span>
      }
      return <span>{part}</span>;
    })
    return <p>{parts}</p>;
  });
  return (
    <div className="text">
      <h2>{props.title}</h2>
      {paragraphs}
    </div>
  );
}

export default Text;