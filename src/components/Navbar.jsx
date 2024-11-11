import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { assets } from "../assets/assets";


const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container className=" g-3">
        <img src={assets.logo} alt="Logo" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
          backgroundColor: 'white'
        }}/>

        <Navbar.Collapse className="flex" id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center w-100">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#About" style={{ color: "white" }}>
              About
            </Nav.Link>
            <Nav.Link href="#Projects" style={{ color: "white" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="#Contact" style={{ color: "white" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className="d-none d-lg-inline">Contact Us</button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
