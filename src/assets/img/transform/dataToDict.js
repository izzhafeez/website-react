import Img from '../Img';
import { Link } from 'react-router-dom';

const dataToDict = (data) => {
  const dict = {};
  data.forEach(({ name, href }) => {
    const img = <Img src={`logo/${name}.svg`} className='logo'/>
    const link = <Link to={href}>{img}</Link>;
    dict[name] = {
      img: img,
      link: link
    }
  });

  return dict;
}

export default dataToDict;