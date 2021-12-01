import {types} from '../types/types' 
import {
    Alert,
    AlertIcon,
  } from '@chakra-ui/react'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
export const login = (email, password) =>{
return {
    type: types.login,
    payload:{
        email,
        password
    }
}

}

export const loginEmailAndPassword = (email, password) =>{
return (dispatch)=>{
    const auth = getAuth()
    signInWithEmailAndPassword(auth , email, password)
    .then(({user})=>{
        dispatch(login(user.uid, user.displayName))
        console.log(user)


    }).catch(error=>{
        console.log(error);
        <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>
    })
   
}
}