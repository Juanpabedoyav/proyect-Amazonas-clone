import React from 'react'
import { Navbar, Container, Nav , NavDropdown ,Form, Button,FormControl} from 'react-bootstrap';

import {Link} from 'react-router-dom'

import logoAmazon from '../assets/logoAmazon.svg'  
import '../styles/styleNav.css'
const NavBar = () => {
    return (
        <div>
            <Navbar className="background-nav" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
      <img src={logoAmazon} alt='logo'/>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as= {Link} className="link-item" to="/login">Home</Nav.Link>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button >Search</Button>
      </Form>
        {/* <Nav.Link  className="link-item" href="#action2">Link</Nav.Link> */}
        <NavDropdown title="Cuenta y Listas"id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Productos</NavDropdown.Item>
          <NavDropdown.Item href="#action4"></NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
          <Link to='/login' >Iniciar Sesion</Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar
