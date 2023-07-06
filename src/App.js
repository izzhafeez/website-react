import { Sidebar, Topbar } from 'components/basic/nav';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import { Col, Row } from 'react-bootstrap';
import Main from 'containers/Main';

const App = () => {
  const isSmall = useMediaQuery({ maxWidth: 576 });

  return (
    <div className="App">
      <Topbar isSmall={isSmall}/>
      <Row>
        <Col xs='auto'>
          <Sidebar isSmall={isSmall}/>
        </Col>
        <Col>
          <Main/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
