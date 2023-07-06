import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';

const links = [
  {
    path: 'github.svg',
    href: 'https://github.com/mynameizzhafeez',
  },
  {
    path: 'linkedin.svg',
    href: 'https://www.linkedin.com/in/izzhafeez/'
  },
  {
    path: 'youtube.svg',
    href: 'https://www.youtube.com/c/izzhafeez'
  },
  {
    path: 'instagram.svg',
    href: 'https://www.instagram.com/mynameizzhafeez/?hl=en'
  }
];

const SidebarFooter = () => {
  return (
    <Row className='p-2 border-top mt-auto'>
      {links.map(({ path, href }) => (
        <Col key={path}>
          <Link to={href}>
            <img
              src={`/img/logos/${path}`}
              alt={path}
              className='logo'
            />
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default SidebarFooter;