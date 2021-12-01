import { types } from "../types/types"

export const loginReducer = (state={}, action)=>{
switch (action.type) {
    case types.login:
        return{
            ...state,
           email:action.payload.email,
           password :action.payload.password
        }
    // case types.registro:
    //     return{
    //         ...state,
    //         name: action.payload.name,
    //        email:action.payload.email,
    //        password :action.payload.password
    //     }
    default:
        return {
            state
        }
}


}