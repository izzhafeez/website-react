import { capitalise } from 'common/text';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Subroute = ({ category, subroute }) => {
  return (
    <Row>
      <Col className='col-2'></Col>
      <Col xs='auto'>
        <NavLink
          to={`${category}/${subroute}`}
          className={'nav-link px-2 py-1 rounded subroute ' + category}
          activeclassname='active'
        >
          {capitalise(subroute)}
        </NavLink>
      </Col>
    </Row>
  );
};

export default Subroute;