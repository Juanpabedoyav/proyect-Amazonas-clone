import React,{useState} from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
  } from "@chakra-ui/react"
  import { Alert, AlertIcon } from "@chakra-ui/alert"
import { useDispatch } from 'react-redux';
import {registroFirebase} from '../redux/actions/registroAction'
  import { Button } from "@chakra-ui/react"
import { StyleForm } from '../styles/Form.Style';
import { Link } from 'react-router-dom';
import {Form, Formik, Field, ErrorMessage,} from 'formik'
import {useNavigate} from 'react-router-dom'
const Registro = () => {

const [submit, setSubmit] = useState(false)

const navigate = useNavigate()
const dispatch = useDispatch()
    return (
        <StyleForm>
   <Formik
   initialValues={{
    name: ' ',
    email: '',
    password:''
      }}
      validate={(data)=>{
       let error = {};
        if(!data.name){
          error.name ='Por favor ingresa un nombre'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.name)){
          error.name ='Ingrese solo letras y espacios'

        }
        if(!data.email){
          error.email ='Por favor ingresa un coreo valido'


        }else if(!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(data.email)){
          error.email ='Por favor ingresa un correo valido '
        }
        return error;
      }}
      onSubmit={(data, {resetForm})=>{
        resetForm();
       setSubmit(true);
       dispatch(registroFirebase(data.email, data.password));
      setTimeout(()=> navigate('/login'), 2000 );      
      console.log(data)
      }}

>


{({errors})=>(
   <Form >
     {/* {console.log(props)}    */}
 
     <FormControl >
  <FormLabel htmlFor="name" className='label'>Nombre Completo</FormLabel>
  <Field
  name='name' 
  placeholder="Nombre Completo"
   />
   <ErrorMessage name='name' component={()=>(<div className="error" >{errors.name}</div>)} />

   {/* {touched.email && errors.email && <div className="error" >{errors.email}</div>} */}
</FormControl>


  <FormControl >
  <FormLabel htmlFor="email" className='label'>Correo Electronico</FormLabel>
  <Field
  id='email' 
  name='email' 
  type="email"
  placeholder="Correo electronico"
   />
      <ErrorMessage name='email' component={()=>(<div className="error" >{errors.email}</div>)} />

   {/* {touched.email && errors.email && <div className="error" >{errors.email}</div>} */}
</FormControl>

<FormControl >
  <FormLabel  htmlFor="nombre" className='label' >Contraseña</FormLabel>
  <Field 
  id='password' 
  name='password' 
  type="password" 
  placeholder="Contraseña"/>
  </FormControl>
    <Button 
    type='submit'
    className="create-button" 
    colorScheme="blue"
    >Crear cuenta</Button>
    { submit && <Alert className='registro-alert' status='success'><AlertIcon />Registro Exitoso!</Alert>
    // :
    //  <Alert className='registro-alert' status='eror'><AlertIcon />Error en el registro!</Alert>
    }
    <Link to='/login'>Volver</Link>
  </Form>
)}

</Formik>

        </StyleForm>
    )
}

export default Registro
