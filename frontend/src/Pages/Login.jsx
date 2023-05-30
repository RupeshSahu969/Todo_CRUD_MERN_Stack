import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./nav.module.css"
import axios from 'axios'
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user,setUser]=useState({})
    
    const navigate=useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const payload = {
            email,
            password
        }
        
        axios.post("https://newtodo-r1f8.onrender.com/login", payload)
            .then((res) => {
                alert("Login Successfully")
               navigate("/todo")
            })
            .catch((err) => {
                console.log(err)
                alert("Somthing went username and password wrong")
            })
    }

    return (
        <div className={styles.shadow}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    required
                />
                <input type="password"
                    placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                    required
                /><br />
                <input type="submit" value="Login" className={styles.btn} />
                <br />
                <br />

                <span>Don'y have an account</span> &nbsp;&nbsp;
                <Link to="/">Signup</Link>
            </form>
        </div>
    )
}

export default Login