import {types} from '../types/types' 

import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import {google} from '../../firebase/firebase'


export const login = (email, password) =>{
return {
    type: types.login,
    payload:{
        email,
        password
    }
}

}

export const loginGoogle = () =>{
return (dispatch)=>{
    const auth = getAuth()
    signInWithPopup(auth , google)
    .then(({user})=>{
        console.log(user)

        dispatch(login(user.email, user.displayName))

    }).catch(e=>{
        console.log(e);
    })
   
}
}
export const loginEmailAndPassword = (email, password) =>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth , email, password)
        .then(({user})=>{
            console.log(user)
    
            dispatch(login(user.email, user.displayName))
    
        }).catch(e=>{
            console.log(e);
        })
       
    }
    }