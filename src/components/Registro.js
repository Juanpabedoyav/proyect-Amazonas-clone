import React from 'react'
import {
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
import { StyleForm } from '../styles/Form.Style';
import { Link } from 'react-router-dom';
import {Form, Formik, Field, ErrorMessage,} from 'formik'
const Registro = () => {




    return (
        <StyleForm>
   <Formik>






   <Form>
            <FormControl id="email">
  <FormLabel className='label'>Correo Electronico</FormLabel>
  <Field 
  type="email"
  placeholder="Correo electronico"
   />
</FormControl>
<FormControl id="password">
  <FormLabel className='label' >Contraseña</FormLabel>
  <Field 
  type="password" 
  placeholder="Contraseña"
  
  />
</FormControl>
    <Button className="create-button" colorScheme="blue">Crear cuenta</Button>
    <Link to='/login'>Volver</Link>
    </Form>
    </Formik>

        </StyleForm>
    )
}

export default Registro
