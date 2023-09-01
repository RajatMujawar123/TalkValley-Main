import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
     
      <Link className='none' to={"/"}>Home</Link><br />
     <Link className='none'  to={"/signup"}>Signup</Link><br />
     <Link className='none'  to={"/login"}>Login</Link><br />
     <Link className='none'  to={"/data"}>Data</Link><br />
    </div>
  )
}

export default Navbar
