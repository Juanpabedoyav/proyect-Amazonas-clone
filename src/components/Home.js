import React, {useState} from 'react'
import { ContainerHome } from '../styles/Home.Style'
import { useEffect } from 'react';
import { getData } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

// const {data} = info


 const dispatch = useDispatch()

 const stateInfo = useSelector(state => state.data)
 const [info, setInfo] = useState(stateInfo)
 dispatch(getData())




useEffect(() => {
setInfo(stateInfo)
  console.log(info.data)
}, [])


    return (
        <ContainerHome>
              <article>
                        <h1>Inicio</h1>
                        <div>
                        <img  src='' alt="imagenes" />
                        </div>
                        
                </article>
      {info.data.map(element => {
              return(
                  <article>
                       <div>
                        <img  src={element.imagen} alt="imagenes" />
                        </div>
                        <h1>{element.nombre}</h1>
                       
                        
                </article>
                )
              
          })
          
          }     
        </ContainerHome>
    )


}



  

export default Home
