import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus">
              About Us
            </Nav.Link>
            <NavDropdown title="Book" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/booking/room">
                Room
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/booking/hall">
                Conference Room/Hall
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/booking/restaurant">
                Restaurant
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/booking">
              booking Room
            </Nav.Link>
            <Nav.Link as={Link} to="/payment">
              Payment
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
