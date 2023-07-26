import ItemFactory from "components/pages/details/ItemFactory";
import Related from "components/pages/details/Related";
import Seo from "components/seo/Seo";
import { useParams } from "react-router-dom";

const Page = ({ category, type, data }) => {
  const { page } = useParams();
  const pageData = data[type].data[page]; // type
  const constructor = ItemFactory.getConstructor(category)(type)(page);
  const item = constructor(pageData);
  const related = pageData.related !== undefined
    ? new Related(pageData.related).getItems()
    : '';
  const seo = new Seo({
    title: item.title,
    imgPath: item.getImgPath(),
    category: category,
    type: type,
    page: page,
    description: item.description.getParsed(true)
  })
  
  return <div>
    {item.getPage(type)}
    {related}
    {seo.getHelmet()}
  </div>;
};

export default Page;