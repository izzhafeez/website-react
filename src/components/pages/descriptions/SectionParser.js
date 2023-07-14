import StarScale from "components/basic/text/star/StarScale";
import parse from "./TextParser";
import { Link } from "react-router-dom";

export const parseLinkSection = text => {
  return <section key='link'>
    <h3>LINK</h3>
    <p><Link to={text}>Click here to view link.</Link></p>
  </section>;
};

export const parseProficiency = text => {
  return <section key='proficiency'>
    <h3>PROFICIENCY</h3>
    <p><StarScale value={text}/></p>
  </section>
}

export const parseParagraphSection = (title, text) => {
  const paragraphs = new String(text).split('\n');

  return <section key={title}>
    <h3>{title.toUpperCase()}</h3>
    {paragraphs.map(parse)}
  </section>;
};