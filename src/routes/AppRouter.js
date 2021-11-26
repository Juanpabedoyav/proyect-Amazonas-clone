import React from 'react'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import App from '../containers/App'
import Login from '../components/Login'

const  AppRouter= () => {
   
      
    return (
        <BrowserRouter>
<NavBar/>
        <Routes>

        {/* <Route path='/' element={}/> */}
        <Route path='/login' element={<Login/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
