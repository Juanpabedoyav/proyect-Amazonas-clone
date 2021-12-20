import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { AddInfo, getCarrito } from "./carritoAction";

export const deleteAsync = (nombre) => {
    return async (dispatch) => {
      const estCollection = collection(db, "carrito");
      const q = query(estCollection, where("nombre", "==", nombre));
      const info =[]
      const datos = await getDocs(q);
      datos.forEach((docu) => {
        deleteDoc(doc(db, "carrito", docu.id));
        console.log(docu)
        info.push(docu)

      });  
    dispatch(getCarrito())

    };
};