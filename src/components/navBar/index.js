import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './style.css';

const NavBar = () => {
  return (
    <Navbar
      expend="lg"
      style={{ backgroundColor: "#b9efd5", height: "60px" }}
      collapseOnSelect={true}
      variant="light"
      className="c-primary"
    >
      <Container className="navBarContainer">
        <Navbar.Brand href="/" className="c-primary logo">
          Logo
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-flex' />
<Navbar.Collapse id="basic-navbar-nav" className='d-flex'> */}
        <Nav>
          <Nav.Item>
            <Nav.Link href="/" className="c-primary bold gap">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about-us" className="c-primary bold">
              About Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/servises" className="c-primary bold gap">
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact-us" className="c-primary bold">
              Contect Us
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href="/search" className='c-primary bold'>Search</Nav.Link>
        </Nav.Item> */}
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};
export default NavBar;
