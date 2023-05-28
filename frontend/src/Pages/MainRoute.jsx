import React from 'react'
import {Routes,Route} from "react-router-dom"
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
const MainRoute = () => {
  return (
    <div>
        <Routes>
            {/* <Route path='/' element={<TodoForm/>} /> */}
            {/* <Route path='/todoitem' element={<TodoItem/>} />
            <Route path='/todolist' element={<TodoList/>} /> */}
        </Routes>
    </div>
  )
}

export default MainRoute