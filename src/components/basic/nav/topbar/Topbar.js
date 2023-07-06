import { Col } from 'react-bootstrap';
import NavToggleButton from './NavToggleButton';
import NavCenterText from './NavCenterText';
import './style.scss';

const Topbar = ({ isSmall }) => {
  return (
    <nav
      id='topbar'
      className='row align-items-center shadow p-2 fixed-top'
    >
      {
        isSmall
        ? (
          <Col xs='auto'>
            <NavToggleButton/>
          </Col>
        )
        : <></>
      }
      <Col>
        <NavCenterText/>
      </Col>
    </nav>
  );
};

export default Topbar;