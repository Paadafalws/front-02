import React from "react";
import logo from '../../imgs/logo.png'
import './header.css'
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

function Headers() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top"  >
    <div className="logo-container">
      <img src={logo} height="40px" alt="Logo"  className="logo-icon"/>
     
    </div>
    <Navbar.Brand href="#home">The Lobster</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="hm" /> 

    <Navbar.Collapse id="basic-navbar-nav" > 
      <Nav className="mr-auto">
        <Nav.Link href="/"> Home <FontAwesomeIcon icon={faHome} className="mr-2" /></Nav.Link>
        <Nav.Link href="/about-us">Contact Us <FontAwesomeIcon icon={faBriefcase} className="mr-2" /></Nav.Link>
        <Nav.Link href="/contact-us">Portfolio  <FontAwesomeIcon icon={faImage} className="mr-2" /></Nav.Link>
        <NavDropdown title="Redes" id="basic-nav-dropdown"> 
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="https://www.linkedin.com/in/paulo-ricardo-m-camargo-226266148/">
            Linkedin
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            instagram
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Yout
          </NavDropdown.Item>
        </NavDropdown>

      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Headers;