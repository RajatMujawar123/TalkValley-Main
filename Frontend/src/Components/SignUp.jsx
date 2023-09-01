import React, { useState } from 'react'
import axios from "axios"
import { useDispatch,  } from 'react-redux';
import { SignupFailureAction, SignupRequestAction, SignupSuccessAction } from '../Redux/AuthRedux/action';
import { Link, useNavigate } from 'react-router-dom';

import "../style/Signup.css"

const Signup = () => {
   const [email,setEmail] = useState("");
   const [name,setName] = useState("")
   const [pass,setPassword] = useState("")
   let dispatch = useDispatch()
   const navigate = useNavigate() 
   const handleSignup = (event) =>{
    event.preventDefault()
    const userData ={
        name,
        email,
        pass
    }
    //console.log(userData)
    dispatch(SignupRequestAction())
    axios.post("https://shiny-wasp-handkerchief.cyclic.app/user/register",userData).then((res)=>{
   //console.log(res)
    alert(res.data.msg)
    navigate("/login")
    dispatch(SignupSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(SignupFailureAction(err))
    })
   }     
    

  return (
    <> 
    
      
    <div className="signup-form">
    <h1 className='head'>Signup Page</h1> 
    <form onSubmit={handleSignup}>
      <input type="text" required placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} value={name} name="name" />
      <input type="text" required placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" />
      <input type="password" required placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} value={pass} name="password" />
      <button type="submit">Signup</button>
    </form>
    <button className='navget'><Link className='navigate' to={"/login"}>Already Have Account</Link></button>

  </div>
  </>
  )
 
  }

export default Signup
