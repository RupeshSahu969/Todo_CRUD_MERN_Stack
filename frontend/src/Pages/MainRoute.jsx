import React from 'react'
import {Routes,Route} from "react-router-dom"
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import Login from './Login'
import SignUp from './SignUp'
import Logout from './Logout'
const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<TodoForm/>} />
            <Route path='/login' element={<Login/>} /> 
            <Route path='/signup' element={<SignUp/>} /> 
            <Route path='/logout' element={<Logout/>} /> 
        </Routes>
    </div>
  )
}

export default MainRoute