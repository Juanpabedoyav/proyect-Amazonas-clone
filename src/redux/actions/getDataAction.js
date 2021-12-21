import { types } from "../types/types"
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase'

export const getInfo =(data)=>{

    return {
        type:types.getData,
        payload: data

    }

 } 
 export const getInfoRecomendados =(data)=>{

    return {
        type:types.recomendados,
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
            dispatch(getInfo(busqueda))
            
        }     
      })
      console.log(busqueda)
      
      }
          
      }
      
      export const getDataRecomendados = () =>{
        return async(dispatch)=> {
            const docRef = collection( db, "products");
            const getProducts = await getDocs(docRef)
            const info =[]
            getProducts.forEach((docs)=>{
    
                info.push(docs.data())
                // console.log(info)
            
    
            })
           
            dispatch(getInfoRecomendados(info));
        
            // console.log(getProducts)   
            }
        }

  