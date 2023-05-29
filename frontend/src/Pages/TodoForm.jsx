import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import Logout from './Logout'
import "./todo.css"
import { BiRightArrow } from "react-icons/bi"
import { FiEdit } from "react-icons/fi"

const TodoForm = () => {
  const [name, setName] = useState("")
  const [todo, setTodo] = useState([])
  const [updateUi, setUpdateUi] = useState(false)
  const [updateId, setUpdateId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      name
    }
    axios.post("http://localhost:8000/todos", payload)
      .then((res) => {
        setName("")
        setUpdateUi((prevState) => !prevState);
      })
      .then((err) => console.log(err))

  }

  useEffect(() => {
    axios.get("http://localhost:8000/todos")
      .then((res) => {
        setTodo(res.data)
      })
      .catch((err) => console.log(err))
  }, [updateUi])

  const handleEdit = (id, text) => {
    setName(text);
    console.log()
    setUpdateId(id);
  }

  const handleUpdate = () => {
    const payload = {
      name
    }
    axios.put(`http://localhost:8000/todos/${updateId}`, payload).then((res) => {
      console.log(res.data);
      setUpdateUi((prevState) => !prevState);
      setUpdateId(null);
      setName("");
      console.log(name)
    });
  }
  return (
    <>
      <div className="conatiner">
        <div className='form-control'>
          <input type='text'
            className='form-control'
            placeholder='enter ToDO'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className="btn" onClick={updateId ? handleUpdate : handleSubmit}>
            {updateId ? <FiEdit /> : <BiRightArrow />}
          </button>
        </div>
      </div>
      <div className='containet_todo'>
        <h2>the Todos;</h2>
        {todo.length > 0 && todo.map((item) => (
          <TodoList key={item._id}
            id={item._id}
            name={item.name}
            Author={item.Author}
            Added={item.Added}
            setUpdateUi={setUpdateUi}
            handleEdit={handleEdit}
          />
        ))}

      </div>
    </>
  )
}

export default TodoForm
