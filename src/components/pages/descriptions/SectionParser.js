import StarScale from "components/basic/text/star/StarScale";
import parse from "./TextParser";
import { Link } from "react-router-dom";

export const parseLinkSection = (text, category) => {
  return <section key='link'>
    <h3 className={category}>LINK</h3>
    <p><Link to={text}>Visit site.</Link></p>
  </section>;
};

export const parseProficiency = (title, text, category) => {
  return <section key='proficiency'>
    <h3 className={category}>{title.toUpperCase()}</h3>
    <p><StarScale value={text}/></p>
  </section>
}

export const parseParagraphSection = (title, text, category) => {
  const paragraphs = text.toString().split('\n');

  return <section className='text-start' key={title ? title : text}>
    {title && <h3 className={category}>{title.toUpperCase()}</h3>}
    {paragraphs.map(parse)}
  </section>;
};