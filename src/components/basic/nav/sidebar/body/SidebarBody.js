import routesData from 'routes';
import RouteWithIcon from './route/RouteWithIcon';
import Subroute from './subroute';
import { Row } from 'react-bootstrap';
import './style.scss';

const SidebarBody = () => {
  return (
    <nav className='offcanvas-body text-start py-2'>
      {routesData.map(route => (
        <Row key={route.label}>
          <RouteWithIcon
            imgPath={`png/${route.imgPath}`}
            path={route.path}
            category={route.category}
          />
          {route.subroutes.map(subroute => (
            <Subroute
              key={subroute.type}
              category={route.category}
              subroute={subroute}
            />
          ))}
        </Row>
      ))}
    </nav>
  );
};

export default SidebarBody;