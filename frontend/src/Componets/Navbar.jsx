import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import Logout from '../Pages/Logout'
import axios from 'axios'
const Navbar = () => {

  return (
    <div className='container'>
        <div style={{marginTop:"7px",fontSize:"30px", color:"white"}}>toDoApp;</div>
        <div style={{marginTop:"10px"}}>
        Logged in as  Chaoo
        </div>
        <div>
            <Logout/>
        </div>
    </div>
  )
}

export default Navbar