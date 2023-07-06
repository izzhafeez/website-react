import { Button } from 'react-bootstrap';

const NavToggleButton = () => {
  return (
    <Button
      className='navbar-toggler rounded-circle'
      variant='light'
      type='button'
      data-bs-toggle='offcanvas'
      data-bs-target='#offcanvas-sidebar'
      aria-controls='offcanvas-sidebar'
      aria-expanded='false'>
      <span className='fas fa-bars fa-1x p-2 fs-3 rounded'></span>
    </Button>
  );
};

export default NavToggleButton;