import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { types } from "../types/types";


export const AddInfo =(data)=>{

    return {
        type:types.carrito,
        payload: data

    }

 } 




export const agregarCarrito = (producto) => {
    return (dispatch) => {
      addDoc(collection(db, "carrito"), producto)
        .then((resp) => {
          //console.log(resp);
          dispatch(AddInfo(producto));
        })
        .catch((err) => console.log(err.message));
    };
  }; 
  
  
  export const getCarrito = () =>{
    return async(dispatch)=> {
        const docRef = collection( db, "carrito");
        const getProducts = await getDocs(docRef)
        const info =[]
        getProducts.forEach((docs)=>{

            info.push(docs.data())
            // console.log(info)
        

        })
       
        dispatch(AddInfo(info));
    
        // console.log(getProducts)   
        }
    }

