import { types } from "../types/types";




export const RecomendadosReducer= (state={}, action) =>{
switch (action.type) {
    case types.recomendados:
        return{
            recomendados: action.payload,
        };
        
    default:
        return state;
    }
};