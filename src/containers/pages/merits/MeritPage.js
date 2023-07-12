import MeritFactory from "components/pages/details/merits/MeritFactory";
import { meritsData } from "data/merits";
import { useParams } from "react-router-dom";

const MeritPage = ({ type }) => {
  const { page } = useParams();
  const data = meritsData[type][page]; // Merit type
  const constructor = MeritFactory.getConstructor(type);
  const merit = constructor(data);
  return merit.getPage(type);
};

export default MeritPage;