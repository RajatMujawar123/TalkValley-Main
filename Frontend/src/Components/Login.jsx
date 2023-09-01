import React, { useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { LoginSuccessAction, LoginRequestAction, LoginFailureAction } from '../Redux/AuthRedux/action';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

   const [email,setEmail] = useState("");
   const [pass,setPassword] = useState("")
   let dispatch = useDispatch()
   const navigate = useNavigate() 

   const handleSignup = (event) =>{
    event.preventDefault()
    const userData ={
        email,
        pass
    }
    //console.log(userData)
    dispatch(LoginRequestAction())
    axios.post("https://shiny-wasp-handkerchief.cyclic.app/user/login",userData).then((res)=>{
      dispatch(LoginSuccessAction(res.data.token))
     //console.log(res)
    
    localStorage.setItem("user",JSON.stringify(res.data))
    navigate("/data")
    }).catch((err)=>{
        dispatch(LoginFailureAction(err))
    })
   }     
  

  return (
    <div className="signup-form">
    <form onSubmit={handleSignup}>  
    <h1 className='head'>Login Page</h1> 
      <input type="text" required placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} value={email} name="email"/>
      <input type="text" required  placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} value={pass} name="password"/>
      <button type="submit">Login</button> 
      </form>   
      <button className='navget'><Link className='navigate' to={"/signup"}>Don't Have Account</Link></button>
    </div>
  )
  
  }

export default Login
