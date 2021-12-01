import React from 'react'
import {
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
import { StyleForm } from '../styles/Form.Style';
import { Link } from 'react-router-dom';

const Registro = () => {
    return (
        <StyleForm>
            <FormControl id="email">
  <FormLabel className='label'>Correo Electronico</FormLabel>
  <Input 
  type="email"
  placeholder="Correo electronico"
   />
</FormControl>
<FormControl id="password">
  <FormLabel className='label' >Contraseña</FormLabel>
  <Input 
  type="password" 
  placeholder="Contraseña"
  
  />
</FormControl>
    <Button className="create-button" colorScheme="blue">Crear cuenta</Button>
    <Link to='/login'>Volver</Link>
        </StyleForm>
    )
}

export default Registro
