import { types } from "../types/types"

export const loginReducer = (state={}, action)=>{
switch (action.type) {
    case types.login:
        return{
            uid:action.payload.uids,      
           email :action.payload.email,
           logged:true
        }
    case types.logout:
        return{
            logged:false,  
        }
    default:
        return {
            state
        }
}


}