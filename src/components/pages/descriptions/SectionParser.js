import StarScale from "components/basic/text/star/StarScale";
import parse from "./TextParser";
import Button from "components/basic/button/Button";

export const parseLinkSection = (link, category, text) => {
  return <section key='link' className='mb-3'>
    {new Button({ link: link, className: category, text: text}).getElement()}
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