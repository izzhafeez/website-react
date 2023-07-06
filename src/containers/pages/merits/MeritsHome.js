import Merits from "components/pages/previews/merits/Merits";
import { meritsData, meritsRoutesData } from "data/merits";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MeritsHome = ({ subpage }) => {
  const isHome = subpage === undefined;
  const limit = isHome ? 5 : Number.POSITIVE_INFINITY;
  const navigate = useNavigate();

  const possibleTypes = meritsRoutesData.map(data => data.type);

  useEffect(() => {
    // check whether the subpage is valid
    if (!isHome && !possibleTypes.includes(subpage)) {
      navigate('/merits');
    }
  }, [])

  const meritsSections = isHome
    ? possibleTypes
    : [subpage].filter(page => possibleTypes.includes(page));

  return <div className='col g-2'>
    {meritsSections.map(section => {
      const merits = new Merits({
        type: section,
        data: meritsData[section],
        limit: limit,
        isHome: isHome
      });
      return merits.getPreview(true);
    })}
  </div>
};

export default MeritsHome;