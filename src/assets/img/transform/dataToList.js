import Img from '../Img';
import { Link } from 'react-router-dom';

const dataToList = (data) => {
  return data.map(({ name, href }) => {
    const img = <Img src={`logo/${name}.svg`} className='logo'/>
    return <Link to={href}>{img}</Link>;
  });
}

export default dataToList;