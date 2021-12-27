import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import './index.css';
import './Header.css';



class Header extends React.Component{
    constructor(props){
        super(props);

    }



    render(){
        return(
           
            <Nav className="me-auto justify-content-end">
              <Nav.Link className="kichwa nav-pill"  href="#home">Home</Nav.Link>
              <Nav.Link className="kichwa" href="#features">Work</Nav.Link>
              <Nav.Link className="kichwa" href="#pricing">About</Nav.Link>
              <Nav.Link className="kichwa" href="#pricing">Contact</Nav.Link>
              
            </Nav>
            
        )
    }
}

export default Header;