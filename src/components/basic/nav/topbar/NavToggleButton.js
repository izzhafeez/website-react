import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const NavToggleButton = () => {
  return (
    <Button
      className='navbar-toggler rounded-circle'
      variant='light'
      type='button'
      data-bs-toggle='offcanvas'
      data-bs-target='#offcanvasSidebar'
      aria-controls='offcanvasSidebar'
      aria-expanded='false'>
      <span className='fs-3'>
        <FontAwesomeIcon icon={faBars} className='rounded p-2'/>
      </span>
    </Button>
  );
};

export default NavToggleButton;