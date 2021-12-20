import { types } from "../types/types"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const registro = (name ,email, password) =>{
    return {
        type: types.registro,
        payload:{
            name,
            email,
            password
        }
    }
    
    }
export const registroFirebase = (email, password)=>{
return(dispatch)=>{
const auth = getAuth()
createUserWithEmailAndPassword(auth, email, password)
.then(({user})=>{
    dispatch(registro(user.displayName, user.email, user.password))
console.log(user.displayName)
}).catch(error=>console.log(error))
}

}

