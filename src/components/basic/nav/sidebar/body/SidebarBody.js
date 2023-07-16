import routesData from 'routes';
import RouteWithIcon from './route/RouteWithIcon';
import Subroute from './subroute';
import { Row } from 'react-bootstrap';
import './style.scss';

const SidebarBody = () => {
  return (
    <nav className='offcanvas-body text-start py-2'>
      {routesData.map(route => (
        <Row key={route.category}>
          <RouteWithIcon
            imgPath={`types/${route.category}.svg`}
            path={route.path}
            category={route.category}
          />
          {route.types.map(type => (
            <Subroute
              key={type}
              category={route.category}
              subroute={type}
            />
          ))}
        </Row>
      ))}
    </nav>
  );
};

export default SidebarBody;