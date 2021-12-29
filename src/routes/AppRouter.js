import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../components/Login'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import Registro from '../components/Registro'
import Home from '../components/Home'
import Detalle from '../components/Detalle'
import NavBar from '../components/NavBar'

// import Privacy from '../components/Privacy'
import { useDispatch } from 'react-redux'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { login, logout} from '../redux/actions/loginAction'
import Carrito from '../components/Carrito'
import Privacy from '../components/Privacy'

 const  AppRouter= () => {
     const dispatch = useDispatch()


   useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
        if(user?.uid){
            console.log(user?.uid)

            dispatch(login(user.uid, user.email))
        }else{
            dispatch(logout());
        }
    })
    }, [dispatch])
      
    return (
        
        <BrowserRouter>
            <NavBar />

        <Routes>

        <Route path='/carrito' element={
                                    <PrivateRouter>
                                        <Carrito/>
                                    </PrivateRouter>}/>
     
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
                      
         <Route path='/registro' element={<PublicRouter>
                                        <Registro/>
                                    </PublicRouter>}/>
        <Route path='/detalle/:id' element={<PublicRouter>
                                        <Detalle/>
                                    </PublicRouter>}/>
        <Route path='/login' element={<PublicRouter>
                                        <Login/>
                                    </PublicRouter>}/>
 

        <Route path='/privacidad' element={<PublicRouter> 
                                         <Privacy/> 
                                        </PublicRouter>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter
