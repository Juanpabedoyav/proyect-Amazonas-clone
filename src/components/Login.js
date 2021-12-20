import React from 'react'
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
import { loginEmailAndPassword, loginGoogle, loginFacebook} from '../redux/actions/loginAction'
import { Form, Formik } from 'formik';
const Login = () => {
const dispatch = useDispatch()



  
// login Events

// const handleSubmit =(e)=>{
// e.preventDefault()
// reset()
// }

const handleGoogle = ()=>{
  dispatch(loginGoogle())
}

const handleFacebook = ()=>{
  dispatch(loginFacebook())
}


    return (
        <StyleForm>
 <Formik
 initialValues={{
  email:'',
  password:'',
 }}
onSubmit={(valores)=>{
  console.log(valores)
  dispatch(loginEmailAndPassword(valores.email, valores.password))

}}
 >
 {({values, errors, handleSubmit, handleChange })=>(


<Form >
<FormControl id="email">
  <FormLabel className='label' >Correo Electronico</FormLabel>
  <Input type="email" 
    placeholder="Correo electronico"
    name="email"
    value={values.email}
    onChange={handleChange}

    />
</FormControl>
<FormControl id="password">
  <FormLabel className='label'>Contraseña</FormLabel>
  <Input 
  type="password" 
  placeholder="Contraseña"
  name="password"
  value={values.password}
  onChange={handleChange}



  />
</FormControl>

    <Button type='submit'className="create-button" colorScheme="blue">Iniciar Sesión</Button>
  </Form>
   )}  
  </Formik>         

    <Button onClick={handleGoogle} type='button'className="create-button" colorScheme="blue">Google</Button>
    <Button onClick={handleFacebook} type='button'className="create-button" colorScheme="blue">Facebook</Button>

    <p>Si no tienes cuenta 
    <Link to="/registro">Registrarse</Link>
    </p>
        </StyleForm>
    )
}

export default Login
