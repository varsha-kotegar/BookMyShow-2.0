import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🎥 BookMyShow 2.0
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link href="#">Events</Nav.Link>
            <Nav.Link href="#">Sports</Nav.Link>
            <Nav.Link href="#">Offers</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="me-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
