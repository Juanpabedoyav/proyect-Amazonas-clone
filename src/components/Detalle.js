import { Button } from '@chakra-ui/button'
import React from 'react'
import { useParams } from 'react-router'
import { StyleDetalle } from '../styles/Detalle.style'

const Detalle = () => {

const {id} = useParams()

    return (
        <div>
            <StyleDetalle>
                <div className="alternative-img">

                <img className='list-img' src="https://res.cloudinary.com/dflxhnzgs/image/upload/v1638764208/amazona/goldenState_ym0fps.jpg" alt="" />               
                <img className='list-img' src="https://res.cloudinary.com/dflxhnzgs/image/upload/v1638764208/amazona/goldenState_ym0fps.jpg" alt="" />               
                <img className='list-img' src="https://res.cloudinary.com/dflxhnzgs/image/upload/v1638764208/amazona/goldenState_ym0fps.jpg" alt="" />               




                </div>
                <div className="principal-img">
            <img src="https://res.cloudinary.com/dflxhnzgs/image/upload/v1638764208/amazona/computador1_mze7d0.jpg" alt="" />               
 </div>
                <div className="info-img">
                <h1>{id}</h1>  
                </div>
                <div className="compra">
                   <h1>$ precio</h1> 


                   <button  type='button'className="agregar-button" >Agregar al Carrito</button>
                   <button  type='button'className="comprar-button" >Comprar Ahora</button>

                </div>
              



            </StyleDetalle>
</div>
    )
}

export default Detalle
