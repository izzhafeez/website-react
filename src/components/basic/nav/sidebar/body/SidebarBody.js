import routesData from 'routes';
import RouteWithIcon from './route/RouteWithIcon';
import Subroute from './subroute';
import { Row } from 'react-bootstrap';

const SidebarBody = () => {
  return (
    <nav className='offcanvas-body text-start py-2'>
      {routesData.map(route => (
        <Row key={route.label}>
          <RouteWithIcon
            imgPath={route.imgPath}
            path={route.path}
            label={route.label}
          />
          {route.subroutes.map(subroute => (
            <Subroute
              key={subroute.label}
              route={route}
              subroute={subroute}
            />
          ))}
        </Row>
      ))}
    </nav>
  );
};

export default SidebarBody;