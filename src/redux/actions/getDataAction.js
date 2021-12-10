import { types } from "../types/types"
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase'

 const getInfo =(data)=>{

    return {
        type:types.getData,
        payload: data

    }

 } 

export const getData = () =>{
    return async(dispatch)=> {
        const docRef = collection( db, "products");
        const getProducts = await getDocs(docRef)
        const info =[]
        getProducts.forEach((docs)=>{

            info.push(docs.data())
            // console.log(info)
        

        })
       
        dispatch(getInfo(info));
    
        // console.log(getProducts)   
        }
    }
    
    export const BusquedaProducto = (nombre) => {
        return async (dispatch) => {
          const docRef = collection(db, "products");
          const getData = await getDocs(docRef);
          const busqueda=[]
          console.log(getData)
          getData.forEach((doc)=>{
      if(doc.data().nombre === nombre){
        busqueda.push(doc.data());
            // console.log
            dispatch(getInfo(busqueda))
            
        }     
      })
      console.log(busqueda)
      
      }
          
      }
      

      export const agregarCarrito = (producto) => {
        return (dispatch) => {
          addDoc(collection(db, "carrito"), producto)
            .then((resp) => {
              //console.log(resp);
              dispatch(getInfo(producto));
            })
            .catch((err) => console.log(err.message));
        };
      }; 