import {types} from '../types/types' 

import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import {google, facebook} from '../../firebase/firebase'

export const logout =()=>{
  return {
   type: types.logout,
    payload:{
        logged: false
    }
 } 
}
export const logoutAsync =()=>{
return (dispatch) =>{
    const auth = getAuth()
   signOut(auth)
    .then(()=>{
        // console.log(user)
        dispatch(logout());
        
    }).catch(e=>{
        console.log(e);
    })
} 
  }


export const login = (uid, email) =>{
return {
    type: types.login,
    payload:{
        uid,
        email,
        logged:true
    }
}

}

export const loginGoogle = () =>{
return (dispatch)=>{
    const auth = getAuth()

    signInWithPopup(auth , google)
    .then(({user})=>{
        // console.log(user)

      
        dispatch(login(user.uid, user.email))
        
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
        dispatch(login(user.displayName, user.email));
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
            // console.log(user)
            dispatch(login(user.uid, user.email))
    
        }).catch(e=>{
            console.log(e);
        })
    }
    }
