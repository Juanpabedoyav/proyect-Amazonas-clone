import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCarrito } from "../redux/actions/carritoAction"
import { CarritoStyle } from "../styles/Carrito.style"




const Carrito = () => {
const dispatch = useDispatch()
const {carrito} = useSelector(state => state.carrito)

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
