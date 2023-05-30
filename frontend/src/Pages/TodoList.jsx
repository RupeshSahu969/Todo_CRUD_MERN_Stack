import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai"
import "./todo.css"
const TodoList = ({ id, name, Author, Added, setUpdateUi, handleEdit }) => {

  const TodoDelete = () => {
    axios.delete(`https://newtodo-r1f8.onrender.com/todos/${id}`)
      .then((res) => {
        console.log(res)
        setUpdateUi((prevState) => !prevState);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='conatiner1'>
      <div>
        <div key={id} className='todo_add'>
          <div><strong> {name}  </strong>  </div>
          <div> <span>Author :</span> {Author} </div>
          <div> <span>Added : </span>{Added}  </div>
        </div>

        <div className='icons'>
          <button>
            <AiFillCheckCircle size={20} />
          </button>
          <button>
            <BiEditAlt size={20} color='blue' onClick={() => handleEdit(id, name)} />
          </button>
          <button>
            <BsTrash size={20} color='red' onClick={TodoDelete} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoList
