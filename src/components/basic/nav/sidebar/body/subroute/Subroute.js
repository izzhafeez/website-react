import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Subroute = ({ route, subroute }) => {
  return (
    <Row>
      <Col className='col-2'></Col>
      <Col xs='auto'>
        <NavLink
          to={route.path+subroute.path}
          className='nav-link px-2 py-1 rounded subroute'
          activeclassname='active'
        >
          {subroute.label}
        </NavLink>
      </Col>
    </Row>
  );
};

export default Subroute;