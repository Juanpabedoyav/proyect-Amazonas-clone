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
        <div>

<FormControl id="email">
  <FormLabel>Correo Electronico</FormLabel>
  <Input type="email" />
</FormControl>
<FormControl id="password">
  <FormLabel>Contraseña</FormLabel>
  <Input type="password" />
</FormControl>
    <Button colorScheme="blue">Iniciar Sesión</Button>
<FacebookLogin
    appId="3341008039459589"
    autoLoad={false}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook} 
        icon="fa-facebook"
        textButton='Ingresar con Facebook'
    />

        </div>
    )
}

export default Login
