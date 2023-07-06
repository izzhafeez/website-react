import { Button } from "react-bootstrap";

const SidebarHeader = () => {
  return (
    <div className='offcanvas-header border-bottom'>
      <h3 className='offcanvas-title' id='sidebarLabel'>
        Contents
      </h3>
      <Button
        type='button'
        variant='light'
        className='btn-close rounded-circle'
        data-bs-dismiss='offcanvas'
        aria-label='Close'>
      </Button>
    </div>
  );
};

export default SidebarHeader;