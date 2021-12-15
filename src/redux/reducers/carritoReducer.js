import { types } from "../types/types";

export const carritoReducer = (state={}, action)=>{
    switch (action.type) {
        case types.carrito:
            return{
            carrito: action.payload,
            }
        default:
            return state;


    }
};