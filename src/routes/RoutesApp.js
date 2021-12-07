import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import Registro from '../components/Registro'
import Home from '../components/Home'
const RoutesApp = () => {
    return (
        <div>
<NavBar/>
<Routes>
     <Route path='/login' element={<Login/>}/> 
<Route path='/registro' element={<Registro/>}/>

</Routes>
        </div>
    )
}

export default RoutesApp
