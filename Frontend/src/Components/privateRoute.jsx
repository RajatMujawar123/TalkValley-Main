import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate} from "react-router-dom"


export const PrivateRoute = ({children}) => {
    const isAuth = useSelector((store)=> store.authReducer.isAuth)
   // console.log(isAuth)
    if(!isAuth){
        return <Navigate to={"/login"}/>
    }
  return children
}

  
