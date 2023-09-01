import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './SignUp'
import Login from './Login'
import { PrivateRoute } from './privateRoute'
import Home from './Home'
import Data from './Data'

const AllRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/data" element={<PrivateRoute> <Data/> </PrivateRoute>}/>
    </Routes>
    </div>
  )
}

export default AllRoutes
