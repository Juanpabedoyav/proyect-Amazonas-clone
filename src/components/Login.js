import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    // FormErrorMessage,
    Input,
    // FormHelperText,
  } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
import { StyleForm } from '../styles/Form.Style';
import { Link } from 'react-router-dom';
const Login = () => {
    const [perfil, setPerfil] = useState({})

   
      
    return (
        <StyleForm>

<FormControl id="email">
  <FormLabel className='label' >Correo Electronico</FormLabel>
  <Input type="email" 
    placeholder="Correo electronico"
    />
</FormControl>
<FormControl id="password">
  <FormLabel className='label'>Contraseña</FormLabel>
  <Input 
  type="password" 
  placeholder="Contraseña"

  />
</FormControl>
    <Button className="create-button" colorScheme="blue">Iniciar Sesión</Button>

    <p>Si no tienes cuenta 
    <Link to="/registro">Registrarse</Link>
    </p>
        </StyleForm>
    )
}

export default Login
