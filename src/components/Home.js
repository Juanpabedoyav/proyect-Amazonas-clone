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

const traerData =()=>{
//  dispatch(getData());
setTimeout(()=>(dispatch(getData())),5000)  ;
}


useEffect(() => {
        traerData();
        setInfo(stateInfo);
        console.log(info.data);
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


              
      {info.data.map(element => {
              return(
                 <Link style={{color:'black'}}to={`/detalle/${element.nombre}`} >
                 
                  <article className='card'>
       
                        <div className='card-img'>
                        <img  src={element.imagen} alt="imagenes" />
                        </div>
                        <p className='description'>{element.nombre}</p>
                        <p className=' precio'><sup>US $</sup>{element.precio}</p>
                </article>
                </Link> 
                )
              
          })
          
          }     
        </ContainerHome>
    )


}



  

export default Home
