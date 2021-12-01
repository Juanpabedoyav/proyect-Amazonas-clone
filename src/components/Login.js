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
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import {login} from '../redux/actions/loginAction'
const Login = () => {
const dispatch = useDispatch()
   const[form, handleInput, reset]= useForm({
    email:'',
    password:''

   })
      
const { email, password} = form
const handleSubmit =(e)=>{
e.preventDefault()
dispatch(login(email, password))
console.log(form)
reset()
}
    return (
        <StyleForm>
<form onSubmit={handleSubmit}>
<FormControl id="email">
  <FormLabel className='label' >Correo Electronico</FormLabel>
  <Input type="email" 
    placeholder="Correo electronico"
    name="email"
    value={email}
    onChange={handleInput}

    />
</FormControl>
<FormControl id="password">
  <FormLabel className='label'>Contraseña</FormLabel>
  <Input 
  type="password" 
  placeholder="Contraseña"
  name="password"
  value={password}
  onChange={handleInput}



  />
</FormControl>
    <Button type='submit'className="create-button" colorScheme="blue">Iniciar Sesión</Button>
    </form>
    <p>Si no tienes cuenta 
    <Link to="/registro">Registrarse</Link>
    </p>
        </StyleForm>
    )
}

export default Login
