import { types } from "../types/types"

export const registro = (name ,email, password) =>{
    return {
        type: types.login,
        payload:{
            name,
            email,
            password
        }
    }
    
    }