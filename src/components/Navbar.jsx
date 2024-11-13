import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { assets } from "../assets/assets";


const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container className=" g-3">
        <img src={assets.logo} alt="Logo" />

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: "white",
          }}
        />

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
            <Nav.Link href="#Testimonials" style={{ color: "white" }}>
              Testimonials
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a href="#Contact" className="btn rounded border text-white d-none d-lg-inline">
          Contact Us
        </a>
      </Container>
    </Navbar>
  );
};

export default NavBar;
