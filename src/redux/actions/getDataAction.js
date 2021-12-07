import { types } from "../types/types"
import { getDocs, collection } from "firebase/firestore";
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
    
    