import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar.Brand href="#home">Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="basic-navbar-nav"
        >
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Book" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/booking/room">
                Room
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/booking/hall">
                Hall
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/aboutus">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/checkbooking">
              Check Booking
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
