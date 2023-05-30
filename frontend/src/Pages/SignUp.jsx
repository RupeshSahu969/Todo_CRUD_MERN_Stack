import React, { useState } from 'react'
import axios from "axios"

import styles from "./nav.module.css"
import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState([])

        const navigate=useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        const payload = {
            email,
            password
        }
        axios.post("https://newtodo-r1f8.onrender.com/signup", payload)
            .then((res) => {
                alert("Signup Successfully")
                navigate("/login")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className={styles.shadow}>
            <h2>SignUp</h2>
            <form onSubmit={handleSignup}>
               
                <input type='email' placeholder='Enter your email'
                    value={email} onChange={e => setEmail(e.target.value)}
                />
                <input type='password'
                    name='password' placeholder='Enter your password'
                    value={password} onChange={e => setPassword(e.target.value)}
                /><br />
                <input type="submit" value="Sign Up" className={styles.btn} />
                <br />
        <br />
        
        <span>Already have an account</span>
         &nbsp;&nbsp;
        <Link to="/login">Login</Link>
            </form>
        </div>
    )
}

export default SignUp
