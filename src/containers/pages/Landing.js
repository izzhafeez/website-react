import MacroIcon from 'components/basic/img/MacroIcon';
import Description from 'components/pages/descriptions/Description';
import Seo from 'components/seo/Seo';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Landing = ({ type, route }) => {
  // category is merits, projects etc.
  // data is meritsData etc.
  // type is languages, skills etc.
  // types is a list containing all the types.
  const { category, types, constructor, data } = route;

  const isHome = type === undefined;
  const isAll = type === 'all';
  const rawDescription = isHome || isAll ? route.description : data[type].description;
  const description = new Description({
    category: category,
    description: rawDescription
  });
  const navigate = useNavigate();

  const possibleTypes = types
    .filter(type => type !== 'all');

  useEffect(() => {
    // check whether the type is valid
    if (!isHome && !isAll && !possibleTypes.includes(type)) {
      navigate(`/${category}`);
    }
  }, []);

  const sections = isHome || isAll
    ? possibleTypes
    : [type].filter(page => possibleTypes.includes(page));

  const title = isHome || isAll ? category : type;
  const backLink = isHome || isAll ? '/' : `/${category}`;

  const imgPath = `types/${title}.svg`;

  const seo = new Seo({
    title: title,
    imgPath: imgPath,
    category: category,
    type: type,
    description: description.getParsed(true)
  });

  return <div className='col'>
    <MacroIcon imgPath={imgPath} category={category} type={type}/>
    <h3 className={`display-6 text-start ps-4`}>
      {title.toUpperCase()}&nbsp;
      (<Link to={backLink} className='link-body-emphasis'>GO BACK</Link>)
    </h3>
    <section className='px-4'>
      {description.getParsed()}
    </section>
    {sections.map(section => {
      const items = constructor({
        type: section,
        data: data[section].data,
        limit: isHome ? data[section].limit : Number.POSITIVE_INFINITY,
        isHome: isHome || isAll
      });
      return items.getPreview({
        withHeader: isHome || isAll,
        withReturnButton: isHome || isAll
      });
    })}
    {seo.getHelmet()}
  </div>
};

export default Landing;