import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCarrito } from "../redux/actions/carritoAction"
import { deleteAsync } from "../redux/actions/deleteAction"
import { CarritoStyle } from "../styles/Carrito.style"



const Carrito = () => {
const dispatch = useDispatch()
const {carrito} = useSelector(state => state.carrito)
const {logged} = useSelector(state => state.login)

const deleteProduct= (nombre)=>{
    dispatch(deleteAsync(nombre))
}


useEffect(() => {

    dispatch(getCarrito())

}, [dispatch])



    return (

        <CarritoStyle>
                        <h1>Carrito</h1>

             <div className="car">
        
        
            {
                carrito=== undefined?
                <h1>Tu carrito es ta vacio </h1>
             :carrito?.map(el=>{
                    return(
                        <div>


                           <div className="container-img">
                                <img src={el.imagen} alt="" />
                             </div>
                                <h1>{el.nombre}</h1>
                            
                                <hr/>                    
                            <button onClick={()=>deleteProduct(el.nombre)}>Borrar</button>

                        </div>
                        
                    )
                })
            }
        
         </div>

        </CarritoStyle>
    )
}

export default Carrito
