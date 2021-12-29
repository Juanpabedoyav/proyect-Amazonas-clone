import { faShoppingCart, faSearch, faMapMarkerAlt, faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect} from 'react'
import { Navbar, Container, Nav , NavDropdown , Button,FormControl} from 'react-bootstrap';
import { useDisclosure } from '@chakra-ui/react'

import {Link} from 'react-router-dom'

import logoAmazon from '../assets/logoAmazon.svg'  
import '../styles/styleNav.css'
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { BusquedaProducto } from '../redux/actions/getDataAction';
import { logoutAsync } from '../redux/actions/loginAction';


const NavBar = () => {
const dispatch = useDispatch()
const {email, logged} = useSelector(state => state.login)
  useEffect(() => {
    getCoordenadas();

  }, [])


  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('left')

  let url = '';
  const [ubicacion, setUbicacion] = useState('')
  const getCoordenadas = () => {
    //watchPosition
    navigator.geolocation.getCurrentPosition(position => {
     const { latitude, longitude } = position.coords;
     url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI';
     console.log(latitude,longitude)
     getUbicacion(url);
   }); 
 }
const getUbicacion = async (urlApi) =>{
const res = await fetch(urlApi);
const {results} = await res.json();
// const country = results[0].address_components[6].long_name;
console.log(results[0].address_components[6].long_name);

setUbicacion(results[0].formatted_address)
}



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
        <Nav.Link as= {Link} className="link-item" style={{fontSize :'.7rem'}} to=""><FontAwesomeIcon className="location"icon= {faMapMarkerAlt}/>{ubicacion}</Nav.Link>
        </div>
        <div className='options'>

  <Formik
  initialValues={{
    nombre: '',
  }}
  onSubmit={(valores)=>{
    console.log(valores);
    dispatch(BusquedaProducto(valores.nombre));
  }}



  >
    {({values, handleChange})=>(
    
   
      <Form className="d-flex">
        <input 
          name='nombre'
          type="search"
          className="me-2"
          value={values.nombre}
          onChange={handleChange}
        />
        <Button type='submit' >
        <FontAwesomeIcon style={{color:'black'}}icon= {faSearch}/>

        </Button>
      </Form> 
    
      )}
</Formik>
      </div>

      <div className='options'>
        {
          email === undefined ?  
          <span  className="link-item" >Hola, identificate</span>
          :
          <span  className="link-item" >Hola, {email}</span>
        }
       
        <NavDropdown title="Cuenta y Listas"id="navbarScrollingDropdown">
          <NavDropdown.Item href="/home">Productos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item >
          {
            logged?<Link to='/login' >Iniciar Sesion</Link>
            :<button  onClick={dispatch(logoutAsync())} >Cerrar Sesion</button>
          } 
          </NavDropdown.Item>
        </NavDropdown>
        </div>

        <div className='options'>
        <span className="link-item" >Devoluciones</span>
        <Nav.Link as= {Link} className="link-item" to="/home">Y Pedidos</Nav.Link>
        </div>

        <div className='options'>
        <Nav.Link as= {Link} className="link-item" to="/carrito"><FontAwesomeIcon  icon= {faShoppingCart} size="lg"/></Nav.Link>
        </div>

      </Nav>
    </Navbar.Collapse>
  </Container>
 </Navbar>
 <nav className='second-bar' >
 <p className='options-second-bar' onClick={onOpen}>
 <FontAwesomeIcon className='logo-second-bar' style={{color:'white'}}icon= {faBars}/>
  Todo
  </p>
  </nav>    

 <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Link to='/login'>
          <DrawerHeader className='drawer-header' borderBottomWidth='1px'  ><FontAwesomeIcon className='user-avatar' icon= {faUserCircle} size='lg' />Hola, Identificate</DrawerHeader>
          </Link>
          <DrawerBody>
         <h1 className='title-drawer'> Ayuda Y Configuración</h1>
        <div className='drawer-option'>
        <p className='select-option'>Carrito</p>
        <Link to='/'>
        <p  className='select-option'>Productos</p>
        </Link>
            <Link to='/login'><p className='select-option' >Identifícate</p></Link>
        </div>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
</div>
    )
}

export default NavBar
