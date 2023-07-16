import MacroIcon from 'components/basic/img/MacroIcon';
import Description from 'components/pages/descriptions/Description';
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
  const description = isHome || isAll ? route.description : data[type].description;
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

  return <div className='col'>
    <MacroIcon imgPath={'types/'+title+'.svg'} category={category} type={type}/>
    <h3 className={`display-6 text-start ps-4`}>
      {title.toUpperCase()}&nbsp;
      (<Link to={backLink} className='link-body-emphasis'>GO BACK</Link>)
    </h3>
    <section className='px-4'>
      {new Description({
        category: category,
        description: description
        }).getParsed()
      }
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
  </div>
};

export default Landing;