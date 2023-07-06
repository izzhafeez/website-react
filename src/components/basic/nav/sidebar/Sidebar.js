import './style.scss';
import OffcanvasSidebar from './OffcanvasSidebar';
import AsideSidebar from './AsideSidebar';

const Sidebar = ({ isSmall }) => {
  return (
    <nav>
      {isSmall ? <OffcanvasSidebar/> : <AsideSidebar/>}
    </nav>
  );
}

export default Sidebar;