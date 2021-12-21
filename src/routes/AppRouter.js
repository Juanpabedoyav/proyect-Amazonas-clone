import React, { useEffect } from 'react'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../components/Login'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import RoutesApp from './RoutesApp'
import Registro from '../components/Registro'
import Home from '../components/Home'
import Detalle from '../components/Detalle'
import Privacy from '../components/Privacy'
import {checked} from '../redux/actions/loginAction'
import { useDispatch } from 'react-redux'


 const  AppRouter= () => {
     const dispatch = useDispatch()


//    useEffect(() => {
//    }, [])
      
    return (
        <BrowserRouter>

        <Routes>

        <Route path='*' element={
                                    <PrivateRouter>
                                        <RoutesApp/>
                                    </PrivateRouter>}/>
        </Routes>

        <Routes>
        <Route path='/' element={<PublicRouter>
                                        <Home/>
                                    </PublicRouter>}/>
       
        <Route path='/detalle/:id' element={<PublicRouter>
                                        <Detalle/>
                                    </PublicRouter>}/>

        <Route path='/privacidad/' element={<PublicRouter>
                                        <Privacy/>
                                    </PublicRouter>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter
