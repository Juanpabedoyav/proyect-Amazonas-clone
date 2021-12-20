import {types} from '../types/types' 

import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import {google, facebook} from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'




export const login = (name, email, password) =>{
return {
    type: types.login,
    payload:{
        name,
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

        dispatch(login(user.displayName, user.email, user.password))

    }).catch(e=>{
        console.log(e);
    })
   
}
}
export const loginFacebook = () =>{
    return (dispatch)=>{
    const auth = getAuth()
    signInWithPopup(auth, facebook)
    .then(({user})=>{
        dispatch(login(user.displayName, user.email, user.password));

    }).catch(e=>{
        alert(e);
    })
    }
    }


export const loginEmailAndPassword = (email, password) =>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth , email, password)
        .then(({user})=>{
            console.log(user)
    
            dispatch(login(user.email, user.password))
    
        }).catch(e=>{
            console.log(e);
        })
       
    }
    }