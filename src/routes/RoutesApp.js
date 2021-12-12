import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import Registro from '../components/Registro'
import Home from '../components/Home'
import Carrito from '../components/Carrito'
const RoutesApp = () => {
    return (
        <div>
<NavBar/>
<Routes>
     <Route path='/login' element={<Login/>}/> 
<Route path='/registro' element={<Registro/>}/>
<Route path='/carrito' element={<Carrito/>}/>


</Routes>
        </div>
    )
}

export default RoutesApp
