import MacroIcon from "components/basic/img/MacroIcon";
import Description from "components/pages/descriptions/Description";
import allData from "data/data";
import routesData from "routes/routes";

const Home = () => {
  return <div className='col'>
    <MacroIcon imgPath='izzhafeez.png' category='home'/>
    <div className='px-4'>
      <h2 className='display-6 text-start'>HI, MY NAME IZZ HAFEEZ</h2>
      {new Description({
        category: 'home',
        description: allData.home.description
        }).getParsed()}
    </div>
    {routesData.slice(1).map(({ category, constructor, data, types }) => (
      types.slice(1).map(type => {
        console.log(data[type].data);
        return constructor({
          category: category,
          type: type,
          data: data[type].data,
          limit: data[type].limit,
          isHome: true
        }).getPreview({ withHeader: true, withReturnButton: false })
      })
    ))}
  </div>
};

export default Home;

// category, type, data, limit, isHome