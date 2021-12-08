import React, {useState} from 'react'
import { ContainerHome } from '../styles/Home.Style'
import { useEffect } from 'react';
import { getData } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/button';

const Home = () => {

// const {data} = info


 const dispatch = useDispatch()

 const stateInfo = useSelector(state => state.data)
 const [info, setInfo] = useState(stateInfo)
//  dispatch(getData())




useEffect(() => {
// setInfo(stateInfo)
//   console.log(info)
}, [])


    return (
        <ContainerHome>
                <div className='container-img'>
                <h1>Feliz Navidad</h1>
                </div>

                
              <article className='card'>
              <p className='text-secure-login'>Inicia sesión para vivir tu mejor experiencia</p>

             <Link to='login'>
              <Button className="secure-login" ><span>Iniciar Sesión de forma segura</span></Button>
              </Link>  
                </article>


                <article className='card'>
       
                        <div className='card-img'>
                        <img  src='https://res.cloudinary.com/dflxhnzgs/image/upload/v1638764207/amazona/mixer_lyq2ap.jpg' alt="imagenes" />
                        </div>
                        <p className='description'>Bigking Lente Full Fame, Aviación Aluminio 11 mm F2.8 Lente Ojo de pez de Enfoque Manual...</p>
                        <p className=' precio'><sup>US $</sup> Precio</p>
                </article>

                <article className='card'>
       
                        <div className='card-img'>
                        <img  src='https://res.cloudinary.com/dflxhnzgs/image/upload/v1638764208/amazona/televisor_jcwjql.jpg' alt="imagenes" />
                        </div>
                        <p className='description'>Bigking Lente Full Fame, Aviación Aluminio 11 mm F2.8 Lente Ojo de pez de Enfoque Manual...</p>
                        <p className=' precio'><sup>US $</sup> Precio</p>
                </article>
              
                <article className='card'>
       
                        <div className='card-img'>
                        <img  src='https://res.cloudinary.com/dflxhnzgs/image/upload/v1638764208/amazona/goldenState_ym0fps.jpg' alt="imagenes" />
                        </div>
                        <p className='description'>Bigking Lente Full Fame, Aviación Aluminio 11 mm F2.8 Lente Ojo de pez de Enfoque Manual...</p>
                        <p className=' precio'><sup>US $</sup> Precio</p>
                </article>
              

              
      {/* {info.data.map(element => {
              return(
                 <Link to={`/detalle/${element.nombre}`} ><article className="card">
                       <div className= 'img-card'>
                        <img  src={element.imagen} alt="imagenes" />
                        </div>
                        <h1>{element.nombre}</h1>
                       
                        
                </article>
                </Link> 
                )
              
          })
          
          }      */}
        </ContainerHome>
    )


}



  

export default Home
