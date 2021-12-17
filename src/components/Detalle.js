import { Button } from '@chakra-ui/button'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { agregarCarrito } from '../redux/actions/carritoAction'
import { BusquedaProducto, getData, getDataOta, getDataRecomendados } from '../redux/actions/getDataAction'
import { StyleDetalle, OptionStyle } from '../styles/Detalle.style'
import Footer from './Footer'
import ReactImageMagnify from 'react-image-magnify';
import '../styles/styleDetalle.css'
import { Link } from 'react-router-dom';

const Detalle = () => {
    
    const dispatch = useDispatch()

    const {data} = useSelector(state => state.data)
    const {recomendados} = useSelector(state => state.recomendados)
    // console.log(recomendados[0])
   
const {id} = useParams()

    const [image, setImage] = useState(data?.map(el=>el.imagen))

    const AddCarrito = ()=>{
        console.log(dispatch(agregarCarrito(data[0])))      
    }

   useEffect(() => {
    dispatch(getDataRecomendados())
    dispatch(BusquedaProducto(id))
   }, [dispatch])

    return (
        <div>
  
            <StyleDetalle>
{
    
data?.map(el => {

    return(     
        <>   
                <div className="alternative-img">

                <img onMouseOver={()=> setImage(el.imagen)} className='list-img' src={el.imagen} alt="" />               
                <img onMouseOver={()=> setImage(el.imagen1)} className='list-img' src={el.imagen1} alt="" />               
                <img onMouseOver={()=> setImage(el.imagen2)} className='list-img' src={el.imagen2} alt="" />               
                <img onMouseOver={()=> setImage(el.imagen3)} className='list-img' src={el.imagen3} alt="" />               




                </div>
               
                <div className="principal-img">
                <ReactImageMagnify   className='img'{...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            width: 1200,
                            height: 1000, 
                            src: image ,
                        },
                        largeImage: {
                            src: image ,
                            width: 1200,
                            height: 1000
                            // style:'200px
                        }
                    }} />
                   {/* <img src={el.imagen} alt="" />                */}
                </div>
                <div className="info-img">
                <h1 style={{fontWeight:'800', marginBottom:'20px'}}>{el.nombre}</h1> 
                    <ul>
                        
                <li>{el.descripcion}</li>
                </ul>
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

    {recomendados?.map(el=>(

       <article className='card'>
       
       <div className='card-img'>
       <img  src={el.imagen} alt="imagenes" />
       </div>
       <p className='description'>{el.nombre}</p>
       <p className=' precio'><sup>US $</sup>{el.precio}</p>
    </article>

    ))
    }
        </div>

    <h1 className='title' >Inspirado por tu historial de búsqueda</h1>
    <div className='option-card'>

{recomendados?.reverse().map(el=>(

   <article className='card'>
   
   <div className='card-img'>
   <img  src={el.imagen} alt="imagenes" />
   </div>
   <p className='description'>{el.nombre}</p>
   <p className=' precio'><sup>US $</sup>{el.precio}</p>
</article>

))
}
    </div>
    <h1 className='title'>Opiniones de clientes</h1>
    <div className='option-card'>

        </div>
    </OptionStyle>
    <Footer />
</div>
    )
}

export default Detalle
