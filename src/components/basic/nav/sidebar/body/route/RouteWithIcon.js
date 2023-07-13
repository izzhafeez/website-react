import { capitalise } from "common/text";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const RouteWithIcon = ({ imgPath, path, category }) => {
  return (
    <Row className='align-items-center'>
      <Col className='col-2'>
        <img
          src={`/img/${imgPath}`}
          alt={category}
          className='nav-img'
        />
      </Col>
      <Col xs='auto'>
        <NavLink
          end to={path === undefined ? `/${category}` : path}
          className={'nav-link fs-4 p-2 rounded route ' + category}
          activeclassname='active'
        >
          {capitalise(category)}
        </NavLink>
      </Col>
    </Row>
  );
};

export default RouteWithIcon;