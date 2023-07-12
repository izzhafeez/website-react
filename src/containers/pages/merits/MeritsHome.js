import Merits from "components/pages/details/merits/Merits";
import MacroIcon from 'components/basic/img/MacroIcon';
import { meritsData, meritsRoutesData } from "data/merits";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const MeritsHome = ({ type }) => {
  const isHome = type === undefined;
  const isAll = type === 'all';
  const limit = isHome ? 5 : Number.POSITIVE_INFINITY;
  const navigate = useNavigate();

  const possibleTypes = meritsRoutesData
    .map(data => data.type)
    .filter(type => type !== 'all');

  useEffect(() => {
    // check whether the type is valid
    if (!isHome && !isAll && !possibleTypes.includes(type)) {
      navigate('/merits');
    }
  }, []);

  const meritsSections = isHome || isAll
    ? possibleTypes
    : [type].filter(page => possibleTypes.includes(page));

  const title = isHome || isAll ? 'merits' : type;
  const backLink = isHome || isAll ? '/' : '/merits';

  return <div className='col'>
    <MacroIcon imgPath={title+'.svg'} key='1'/>
    <h2 className='display-6 text-start ps-4'>
      {title.toUpperCase()}&nbsp;
      (<Link to={backLink} className='link-body-emphasis'>GO BACK</Link>)
    </h2>
    {meritsSections.map(section => {
      const merits = new Merits({
        type: section,
        data: meritsData[section],
        limit: limit,
        isHome: isHome || isAll
      });
      return merits.getPreview(isHome || isAll);
    })}
  </div>
};

export default MeritsHome;