import ItemFactory from "components/pages/details/ItemFactory";
import Related from "components/pages/details/Related";
import { useParams } from "react-router-dom";

const Page = ({ category, type, data }) => {
  const { page } = useParams();
  const pageData = data[type].data[page]; // Merit type
  const constructor = ItemFactory.getConstructor(category)(type);
  const item = constructor(pageData);
  const related = pageData.related !== undefined ? new Related(pageData.related).getItems() : '';
  return <div>
    {item.getPage(type)}
    {related}
  </div>;
};

export default Page;