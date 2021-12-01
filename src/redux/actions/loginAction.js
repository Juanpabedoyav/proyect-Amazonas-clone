import {types} from '../types/types' 
import {  signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth"
import {auth} from '../../firebase/firebase'  
export const login = (email, password) =>{
return {
    type: types.login,
    payload:{
        email,
        password
    }
}

}

// export const loginEmailAndPassword = (email, password) =>{
// return (dispatch)=>{
//     signInWithEmailAndPassword(auth , email, password)
//     .then(({user})=>{
//         dispatch(login())
//         console.log(user)


//     }).catch(error=>{
//         console.log(error);
//     })
   
// }
// }