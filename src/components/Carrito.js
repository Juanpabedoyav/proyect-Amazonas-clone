import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCarrito } from "../redux/actions/carritoAction"
import { deleteAsync } from "../redux/actions/deleteAction"
import { CarritoStyle } from "../styles/Carrito.style"




const Carrito = () => {
const dispatch = useDispatch()
const {carrito} = useSelector(state => state.carrito)

const deleteProduct= (nombre)=>{
    dispatch(deleteAsync(nombre))
}

useEffect(() => {
    dispatch(getCarrito())
    // console.log(state)
}, [dispatch])



    return (

        <CarritoStyle>
                                                    <div className="car">
                                <h1>Carrito</h1>


            {
                carrito?.map(el=>{
                    return(
                        <div>


                           <div className="container-img">
                                <img src={el.imagen} alt="" />
                             </div>
                                <h1>{el.nombre}</h1>
                            <button onClick={()=>deleteProduct(el.nombre)}>Borrar</button>
                            
                                <hr/>                    

                        </div>
                        
                    )
                })
            }

                                    </div>

        </CarritoStyle>
    )
}

export default Carrito
