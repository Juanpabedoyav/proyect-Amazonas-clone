import { types } from "../types/types"
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../firebase/firebase'


export const getData = () =>{
    return async()=> {
        const docRef = collection( db, "products");
        const getProducts = await getDocs(docRef)
   
        getProducts.forEach((docs)=>{
           docs.data()
        })
        


        // console.log(getProducts)
          
        }
    }
    
    