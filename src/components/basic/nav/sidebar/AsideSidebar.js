import SidebarBody from "./body/SidebarBody";
import SidebarFooter from "./footer/SidebarFooter";
import './style.scss';

const AsideSidebar = () => (
  <aside
    id='aside-sidebar'
    data-bs-scroll='true'
    data-bs-backdrop='false'
    aria-labelledby='sidebarLabel'
    className='sidebar px-2 d-flex flex-column'
  >
    <SidebarBody/>
    <SidebarFooter/>
  </aside>
);

export default AsideSidebar;