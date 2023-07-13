import MacroIcon from 'components/basic/img/MacroIcon';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Landing = ({ category, constructor, data, routesData, type }) => {
  // category is merits, projects etc.
  // data is meritsData etc.
  // routesData is meritsRoutesData etc.
  // type is languages, skills etc.
  const isHome = type === undefined;
  const isAll = type === 'all';
  const limit = isHome ? 5 : Number.POSITIVE_INFINITY;
  const navigate = useNavigate();

  const possibleTypes = routesData
    .map(routeData => routeData.type)
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
    <MacroIcon imgPath={title+'.svg'} type={type}/>
    <h2 className='display-6 text-start ps-4'>
      {title.toUpperCase()}&nbsp;
      (<Link to={backLink} className='link-body-emphasis'>GO BACK</Link>)
    </h2>
    {sections.map(section => {
      const items = constructor({
        type: section,
        data: data[section],
        limit: limit,
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