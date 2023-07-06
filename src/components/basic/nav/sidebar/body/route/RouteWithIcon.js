import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './style.scss';

const RouteWithIcon = ({ imgPath, path, label }) => {
  return (
    <Row className='align-items-center'>
      <Col className='col-2'>
        <img
          src={`/img/${imgPath}`}
          alt={label}
          className='nav-img'
        />
      </Col>
      <Col xs='auto'>
        <NavLink
          end to={path}
          className='nav-link fs-4 p-2 rounded route'
          activeclassname='active'
        >
          {label}
        </NavLink>
      </Col>
    </Row>
  );
};

export default RouteWithIcon;