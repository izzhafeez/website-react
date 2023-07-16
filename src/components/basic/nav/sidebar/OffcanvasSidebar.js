import SidebarBody from "./body/SidebarBody";
import SidebarFooter from "./footer/SidebarFooter";
import SidebarHeader from "./header/SidebarHeader";
import './style.scss';

const OffcanvasSidebar = () => (
  <aside
    id='offcanvasSidebar'
    className='sidebar offcanvas offcanvas-end shadow-lg p-2'
    data-bs-scroll='true'
    data-bs-backdrop='false'
    tabIndex='-1'
    aria-labelledby='sidebarLabel'
  >
    <SidebarHeader/>
    <SidebarBody/>
    <SidebarFooter/>
  </aside>
);

export default OffcanvasSidebar;