import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Header from './Header';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Intro from "./Intro.js"

class App extends React.Component{
  constructor(props) {
    super(props);
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
render() {
  return (
    <div>
    <Container fluid="lg">
    <Row className="header" ref={this.vantaRef}>
    <Col sm={2}><Image src={logo} className="App-logo" /> </Col>
    <Col sm={10}><Header/></Col>
    
    </Row>
 
   
  </Container>
     <Container>
     <Row>
     <Col md={true}>
     <Intro/>
     </Col>
     </Row>
     </Container>
     </div>


  
  )
}
}

export default App;
