import MacroIcon from "components/basic/img/MacroIcon";
import Description from "components/pages/descriptions/Description";
import Seo from "components/seo/Seo";
import allData from "data/data";
import ItemsFactory from "components/pages/details/ItemsFactory";

const Home = () => {
  const description = new Description({
    category: 'home',
    description: allData.home.description
  });

  const seo = new Seo({
    title: 'home',
    imgPath: 'izzhafeez.png',
    description: "I'm currently a Computer Science student in NUS. Check out what I've learnt, experienced and created in my 8 years of programming."
  });

  const sections = [
    ['merits', 'experiences'],
    ['projects', 'coding'],
    ['merits', 'awards'],
    ['merits', 'modules'],
    ['merits', 'certificates'],
    ['projects', 'quizzes'],
    ['blog', 'hikes'],
    ['merits', 'languages'],
    ['merits', 'technologies'],
    ['projects', 'music'],
    ['blog', 'malls'],
    ['projects', 'graphs'],
    ['merits', 'skills']
  ]

  return <div className='col'>
    <MacroIcon imgPath='izzhafeez.png' category='home'/>
    <div className='px-2'>
      <h2 className='display-6 text-start'>HI, MY NAME IZZ HAFEEZ</h2>
      {description.getParsed()}
    </div>
    {sections.map(([category, type]) => {
      const data = allData[category].data;
      const constructor = ItemsFactory.getConstructor(category);
      return constructor({
        category: category,
        type: type,
        data: data[type].data,
        limit: data[type].limit,
        isHome: true
      }).getPreview({ withHeader: true, withReturnButton: false, withMap: false })
    })}
    {seo.getHelmet()}
  </div>
};

export default Home;