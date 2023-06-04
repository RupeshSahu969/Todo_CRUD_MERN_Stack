import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

const navigate=useNavigate()

    const hendlesubmit=()=>{
        localStorage.setItem("token","")
      navigate("/signup")
    }

  return (
    <div>
      <p onClick={hendlesubmit}>SIGNOUT</p>
    </div>
  )
}

export default Logout
