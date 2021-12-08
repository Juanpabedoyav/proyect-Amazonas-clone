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
 dispatch(getData())




useEffect(() => {
setInfo(stateInfo)
  console.log(info)
}, [])


    return (
        <ContainerHome>
              <article className='card'>
             <Link to='login'>
              <Button className="create-button" colorScheme="blue">Iniciar Sesión</Button>
              </Link>
                        <div>
                        <img  src='' alt="imagenes" />
                        </div>
                        
                </article>
      {info.data.map(element => {
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
          
          }     
        </ContainerHome>
    )


}



  

export default Home
