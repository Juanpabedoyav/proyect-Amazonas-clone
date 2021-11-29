import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    FormHelperText,
  } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
import { StyleForm } from '../styles/Form.Style';
import { Link } from 'react-router-dom';
const Login = () => {
    const [perfil, setPerfil] = useState({})

    const responseFacebook = (response) => {
        console.log(response);
        const res = response.picture;
        const{data} = res;
        console.log(data );
        setPerfil(data);
      }
      
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
<FacebookLogin
    appId="3341008039459589"
    autoLoad={false}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook} 
        icon="fa-facebook"
        textButton='Ingresar con Facebook'
    />
    <p>Si no tienes cuenta 
    <Link to="/registro">Registrarse</Link>
    </p>
        </StyleForm>
    )
}

export default Login
