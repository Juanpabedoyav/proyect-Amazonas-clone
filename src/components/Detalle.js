import { Button } from '@chakra-ui/button'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { agregarCarrito } from '../redux/actions/carritoAction'
import { BusquedaProducto, getData, getDataOta } from '../redux/actions/getDataAction'
import { StyleDetalle, OptionStyle } from '../styles/Detalle.style'
import Footer from './Footer'
import ReactImageMagnify from 'react-image-magnify';
import '../styles/styleDetalle.css'

const Detalle = () => {

 const dispatch = useDispatch()

    const {data} = useSelector(state => state.data)
    const {id} = useParams()

    const AddCarrito = ()=>{
        // e.preventDefault();
        console.log(dispatch(agregarCarrito(data[0])))
        // console.log('producto agregado')
        // console.log(data[0])

    }

   useEffect(() => {
    dispatch(BusquedaProducto(id))
    // AddCarrito();
        //    dispatch(getData())
        //    console.log(info.filter(el=> el === id))
        // console.log(data?.map(el=>el.imagen))
   }, [dispatch])

    return (
        <div>
  
            <StyleDetalle>
{
data?.map(el => {
    return(     
        <>   
                <div className="alternative-img">

                <img className='list-img' src="https://res.cloudinary.com/dflxhnzgs/image/upload/v1638764208/amazona/goldenState_ym0fps.jpg" alt="" />               
                <img className='list-img' src="https://res.cloudinary.com/dflxhnzgs/image/upload/v1638764208/amazona/goldenState_ym0fps.jpg" alt="" />               
                <img className='list-img' src="https://res.cloudinary.com/dflxhnzgs/image/upload/v1638764208/amazona/goldenState_ym0fps.jpg" alt="" />               




                </div>
               
                <div className="principal-img">
                <ReactImageMagnify   className='img'{...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            width: 1200,
                            height: 1000, 
                            src: el.imagen,
                        },
                        largeImage: {
                            src: el.imagen,
                            width: 1200,
                            height: 1000
                            // style:'200px
                        }
                    }} />
                   {/* <img src={el.imagen} alt="" />                */}
                </div>
                <div className="info-img">
                <h1>{el.nombre}</h1>  
                </div>
                <div className="compra">
                   <h1>$ {el.precio}</h1> 


                   <button onClick={() => AddCarrito()} type='button'className="agregar-button" >Agregar al Carrito</button>
                   <button  type='button'className="comprar-button" >Comprar Ahora</button>

                </div>
            </>
   
   )
})
}    

            </StyleDetalle>
    <OptionStyle>
    <h1 className='title'>Productos relacionados con este artículo</h1>
    <div className='option-card'>




    </div>
    <h1 className='title' >Inspirado por tu historial de búsqueda</h1>
    <div  className='option-card'>
    


    </div>
    <h1 className='title'>Opiniones de clientes</h1>
    <div  className='option-card'>



    </div>
    </OptionStyle>
    <Footer />
</div>
    )
}

export default Detalle
