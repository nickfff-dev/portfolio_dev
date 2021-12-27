import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Header from './Header';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <Container fluid="lg">
    <Row>
    <Col sm={true}><Image src={logo} className="App-logo" /> </Col>
    <Col sm={true}><Header/></Col>
    <Col sm={true}><img   /> </Col>
    </Row>
  </Container>
  );
}

export default App;
