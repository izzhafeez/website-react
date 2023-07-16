import MacroIcon from "components/basic/img/MacroIcon";
import Description from "components/pages/descriptions/Description";
import allData from "data/data";
import routesData from "routes/routes";

const Home = () => {
  return <div className='col'>
    <MacroIcon imgPath='izzhafeez.png' category='home'/>
    <h2 className='display-6 text-start'>HI, MY NAME IZZ HAFEEZ</h2>
    {new Description({
      category: 'home',
      description: allData.home.description
      }).getParsed()}
  </div>
};

export default Home;