import { faShoppingCart, faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <Navbar.Brand as= {Link} to="/home">
      <img src={logoAmazon} alt='logo'/>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <div className='options'>
        <span className="link-item" >Hola</span>
        <Nav.Link as= {Link} className="link-item" to="/home"><FontAwesomeIcon className="location"icon= {faMapMarkerAlt}/>Elige Tu dirección</Nav.Link>
        </div>
        <div className='options'>

        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button >
        <FontAwesomeIcon style={{color:'black'}}icon= {faSearch}/>

        </Button>
      </Form>
      </div>

      <div className='options'>
        <span  className="link-item" >Hola, identificate</span>
        <NavDropdown title="Cuenta y Listas"id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Productos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
          <Link to='/login' >Iniciar Sesion</Link>
          </NavDropdown.Item>
        </NavDropdown>
        </div>
        <div className='options'>
        <span className="link-item" >Devoluciones</span>
        <Nav.Link as= {Link} className="link-item" to="/home">Y Pedidos</Nav.Link>
        </div>
        <div className='options'>
        <Nav.Link as= {Link} className="link-item" to="/carrito"><FontAwesomeIcon icon= {faShoppingCart} size="lg"/></Nav.Link>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
 </Navbar>
</div>
    )
}

export default NavBar
